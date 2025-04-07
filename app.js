const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple check
  if (username === 'admin' && password === '1234') {
    res.redirect('/welcome');
  } else {
    res.send('Login failed. Try again.');
  }
});

// Serve welcome page
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'welcome.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use(express.static('public'));
