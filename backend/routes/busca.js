const express = require('express');
const router = express.Router();

const items = [
  { id: 1, nome: 'Celular Samsung', local: 'Biblioteca' },
  { id: 2, nome: 'Chave do carro', local: 'Cantina' },
  { id: 3, nome: 'Mochila preta', local: 'Sala 102' },
];

router.get('/', (req, res) => {
  const termo = req.query.q?.toLowerCase() || '';
  
  const resultados = items.filter(item =>
    item.nome.toLowerCase().includes(termo) ||
    item.local.toLowerCase().includes(termo)
  );
  
  res.json(resultados);
});

module.exports = router;