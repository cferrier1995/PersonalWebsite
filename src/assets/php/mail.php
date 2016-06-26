<?php
ini_set('display_errors',1);

$name = $_POST["name"];
$from = $_POST["email"];
$organization = $_POST["organization"];
$message = $_POST["message"];

$msg = "
Name: $name
Email: $from
Organization: $organization
Message:
$message";

$to = "ferriercory@gmail.com";
$subject = "Web Form";
$message = $msg;
$headers = "Web Form";

$mail = mail($to, $from, $message, $headers);
if($mail){
  http_response_code(200);
}else{
  http_response_code(500);
}
?>