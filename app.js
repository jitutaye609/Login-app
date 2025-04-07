const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// ✅ Add this for Register Page
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// ✅ Handle Registration Form Submission (Optional logic)
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // You can save this to MongoDB later
  res.send(`User registered: ${username}`);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.sendFile(path.join(__dirname, 'views', 'welcome.html'));
  } else {
    res.send('Login Failed. Try again.');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
