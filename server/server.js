const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow CORS from any origin (all ports)
app.use(cors());          // <-- allow all origins
app.options('*', cors()); // enable preflight for all routes
app.use(express.json());

// Create transporter with debug/logger enabled for easier debugging
// Note: set EMAIL_USER and EMAIL_PASS in your .env (use Gmail App Password if using Gmail + 2FA)
const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // allow self-signed certs if needed for testing (remove in production)
      rejectUnauthorized: false
    },
  },
  {
    // enable internal logging to stdout (helpful during development)
    logger: true,
    debug: true,
  }
);

// verify transporter early so errors surface on startup (prints full error)
transporter.verify((err, success) => {
  if (err) {
    console.error('Nodemailer verify failed:', err && err.stack ? err.stack : err);
  } else {
    console.log('Nodemailer transporter is ready');
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'no-reply@example.com',
    to: process.env.EMAIL_USER || 'no-reply@example.com',
    subject: 'New Contact from Portfolio',
    text: `New contact request from: ${email}`,
    html: `
      <h3>New Contact Request</h3>
      <p>Email: ${email}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error && error.response ? error.response : (error && error.message ? error.message : error));
    // return more helpful message to frontend
    res.status(500).json({ error: 'Failed to send email. Check server logs for details.' });
  }
});

// Start server (respect PORT env var when deployed)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});