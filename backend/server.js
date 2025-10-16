const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos (HTML, CSS, JS) da pasta "public"
app.use(express.static('public'));

// Rota raiz -> redireciona pro login
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Rotas de autenticação
app.use('/auth', authRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});