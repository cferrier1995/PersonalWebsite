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
  echo "Thank you for using our mail form";
}else{
  echo "Mail sending failed.";
}
?>