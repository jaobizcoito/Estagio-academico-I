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


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // pasta do frontend

// "Banco de dados" em memória 
const users = [];

// Função simples para validar e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Rota raiz
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Registro
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'E-mail inválido.' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'E-mail já cadastrado.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });

  res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'E-mail ou senha incorretos.' });
  }

  res.status(200).json({ message: Bem-vindo, ${user.name}! });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(✅ Servidor rodando em http://localhost:${PORT});
});