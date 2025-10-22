document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita recarregar a página

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    alert(data.message); // Mostra a resposta do servidor

    if (response.ok) {
      e.target.reset(); // Limpa os campos se registro for bem-sucedido
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao registrar usuário.');
  }
});