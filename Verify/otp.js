const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./schema');

mongoose.connect('mongodb://127.0.0.1:27017/OneTp')
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Database is not connected");
  });

// Function to generate a random OTP
function generateOTP() {
  // ... (same as before)
}

// Function to send OTP via email
function sendOTPByEmail(email, otp) {
  // ... (same as before)
}

// Route to send OTP and store it in the database
app.post('/sendOTP', async (req, res) => {
  const { email } = req.body;
  const generatedOTP = generateOTP();

  // Save the generated OTP in the database
  try {
    const user = new User({
      email,
      otp: generatedOTP,
    });
    await user.save();

    // Send the OTP via email
    sendOTPByEmail(email, generatedOTP);

    res.send('OTP sent successfully');
  } catch (error) {
    console.error('Error saving OTP to database:', error);
    res.status(500).send('Failed to send OTP');
  }
});

app.listen(1000, () => {
  console.log('Server is listening:5000');
});
