<?php
// Processar os dados do formulário de cadastro

// Receber os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];
$nome = $_POST['nome'];
$endereco = $_POST['endereco'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];

// Salvar os dados no banco de dados

// Redirecionar para a página de confirmação de cadastro
header('<form id="loginForm" action="login.php" method="POST">
<input type="email" name="email" placeholder="E-mail" required>
<input type="password" name="senha" placeholder="Senha" required>
<button type="submit">Entrar</button>');
exit;
?>
