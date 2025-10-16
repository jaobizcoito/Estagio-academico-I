const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/login.html');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor:http://localhost:${PORT}`);
});