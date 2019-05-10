<?php

$name = $_POST['name'];
echo filter_var($name, FILTER_SANITIZE_STRING);

$surname = $_POST['surname'];
echo filter_var($surname, FILTER_SANITIZE_STRING);

$adress = $_POST['adress'];
echo filter_var($adress, FILTER_SANITIZE_STRING);

$town = $_POST['town'];
echo filter_var($town, FILTER_SANITIZE_STRING);

$postal = $_POST['postal'];
echo filter_var($postal, FILTER_SANITIZE_NUMBER_INT);

$phone = $_POST['phone'];
echo filter_var($phone, FILTER_SANITIZE_NUMBER_INT);

$email = $_POST['email'];
echo filter_var($email, FILTER_SANITIZE_EMAIL);

$year = $_POST['year'];
echo filter_var($year, FILTER_SANITIZE_STRING);

$am = $_POST['am'];
echo filter_var($am, FILTER_SANITIZE_NUMBER_INT);

$doc = $_POST['doc'];
echo filter_var($doc, FILTER_SANITIZE_STRING);

$receive = $_POST['receive'];
echo filter_var($receive, FILTER_SANITIZE_STRING);

$date = $_POST['date'];
echo filter_var($date, FILTER_SANITIZE_STRING);


$filename = $name . "_" . $surname . ".txt";
$data = $name . "\r\n" . $surname . "\r\n" . $adress . "\r\n" . $town . "\r\n" . $postal . "\r\n" . $phone . "\r\n" . $email . "\r\n" . $year . "\r\n" .  $am . "\r\n" . $doc . "\r\n" . $receive . "\r\n" . $date;
//$data = serialize ($data);
file_put_contents ($filename , $data, LOCK_EX);


?>
