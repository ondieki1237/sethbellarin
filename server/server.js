const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bellarinseth@gmail.com',
    pass: 'jaqi upjs ckjk abpz',
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'bellarinseth@gmail.com',
    to: 'bellarinseth@gmail.com', // You can change this to another email address if needed
    subject: 'New Contact from Portfolio',
    text: `New contact request from: ${email}`,
    html: `
      <h3>New Contact Request</h3>
      <p>Email: ${email}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
