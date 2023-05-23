// Script para manipular os formulários

// Formulário de cadastro
const cadastroForm = document.getElementById('cadastro-form');
cadastroForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obter os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Enviar os dados para o servidor (exemplo: usando AJAX)
  // ...

  // Redirecionar para a página de sucesso
  window.location.href = 'cadastro_sucesso.html';
});

// Formulário de login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obter os valores dos campos do formulário
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Enviar os dados para o servidor (exemplo: usando AJAX)
  // ...

  // Redirecionar para a página de sucesso ou erro
  if (email === 'seu-email' && senha === 'sua-senha') {
    window.location.href = 'login_sucesso.html';
  } else {
    window.location.href = 'login_erro.html';
  }
});
