const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to log IPs
app.use((req, res, next) => {
  const ip = req.ip; // Get the user's IP address
  const timestamp = new Date().toISOString();
  const logMessage = `IP: ${ip}, Date: ${timestamp}\n`;

  // Append the log to a file
  fs.appendFile('logs.txt', logMessage, (err) => {
    if (err) throw err;
    console.log('IP logged:', ip);
  });

  next(); // Proceed to the next middleware or route handler
});

// Hello endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
