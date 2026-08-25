<?php
// Handler de contacto para producción en cPanel.
// Recibe un POST con los campos name, email y message y envía el mail
// al correo de la empresa usando el SMTP de cPanel.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// ============================================================
//  CONFIGURÁ ACÁ tu correo real con dominio de la empresa:
// ============================================================
$to = 'contacto@tuempresa.com';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Invalid input');
}

$subject = "Consulta desde la web: $name";
$body = "Nombre: $name\nEmail: $email\n\n$message";
$headers = "From: $email\r\n" .
           "Reply-To: $email\r\n" .
           "Content-Type: text/plain; charset=utf-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    exit('OK');
}

http_response_code(500);
exit('Mail failed');
