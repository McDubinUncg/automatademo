const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the js directory
app.use('/js', express.static('js'));

// Serve static files from the public directory
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/main.html'));
});

// Validate email address and send JSON response
app.post('/validate-email', (req, res) => {
  const email = req.body.email;
  if (!email) {
    // Return error if email parameter is missing
    res.status(400).json({ error: 'Email parameter missing' });
    return;
  }
  const isValidEmail = validateEmail(email);
  res.json({ isValidEmail });
});

// Validate email using regular expression
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
