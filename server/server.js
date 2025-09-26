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

// listen for transport-level errors so they don't bubble as unhandled 'error' events
transporter.on('error', (err) => {
  console.error('Nodemailer transport error:', err && err.stack ? err.stack : err);
});

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

// (place where code uses something.fsPath)
if (item && typeof item.fsPath !== 'undefined') {
  const p = item.fsPath;
  // ...use p...
}

// Start server (respect PORT env var when deployed)
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// handle server errors (EADDRINUSE, etc.) instead of letting Node throw uncaught 'error'
server.on('error', (err) => {
  console.error('HTTP server error:', err && err.stack ? err.stack : err);
  // optional: exit for fatal errors so process manager can restart
  // process.exit(1);
});

// global process-level handlers to log unexpected failures
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err && err.stack ? err.stack : err);
  // consider exiting in production: process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason && reason.stack ? reason.stack : reason);
  // consider exiting in production: process.exit(1);
});