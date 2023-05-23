<?php
// Processar os dados do formulário de login

// Verificar se o e-mail e senha estão corretos
$email = $_POST['email'];
$senha = $_POST['senha'];

// Verificar as credenciais do usuário no banco de dados

// Redirecionar para a página principal após o login
header('Location: principal.php');
exit;
?>
