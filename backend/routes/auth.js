const express = require('express');
const router = express.Router();

const usuarios = [
  { email: 'teste@email.com', cpf: '12345678900', senha: '1234' },
  { email: 'aluno@universidade.com', cpf: '98765432100', senha: 'senha123' },
];

router.post('/login', (req, res) => {
  const { emailOuCpf, senha } = req.body;

  const usuario = usuarios.find(
    (u) =>
      (u.email === emailOuCpf || u.cpf === emailOuCpf) && u.senha === senha
  );

  if (usuario) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Email/CPF ou senha incorretos.' });
  }
});

module.exports = router;
