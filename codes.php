<?php
header('Content-Type: application/json');

// Получаем IP посетителя
$ip = isset($_SERVER['HTTP_CLIENT_IP']) 
    ? $_SERVER['HTTP_CLIENT_IP'] 
    : (isset($_SERVER['HTTP_X_FORWARDED_FOR'])
        ? $_SERVER['HTTP_X_FORWARDED_FOR'] 
        : $_SERVER['REMOTE_ADDR']);

// Получаем информацию о стране по IP через API
$country = file_get_contents("http://ipinfo.io/{$ip}/country");

// Загружаем разрешенные коды из JSON файла
$codesJson = file_get_contents('codes.json');
$codesData = json_decode($codesJson, true);
$validCodes = $codesData['codes'];

// Telegram данные
$botToken = '5401464457:AAHJmU9s2NzE0lerJc32e99Icrmd64loF4s';
$chatId = '612475751';

// Получаем код из POST запроса
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
$code = $input['code'] ?? '';

// Формируем сообщение
$message = "Новое скачивание:\nIP: {$ip}\nСтрана: {$country}\nКод: {$code}";

// Отправляем в Telegram
file_get_contents("https://api.telegram.org/bot{$botToken}/sendMessage?chat_id={$chatId}&text=" . urlencode($message));

// Проверяем код
$response = [
    'valid' => in_array($code, $validCodes)
];

// Возвращаем результат
echo json_encode($response);
?>
