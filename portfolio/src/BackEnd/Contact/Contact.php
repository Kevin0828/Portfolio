<?php

$name = $_REQUEST['Name'];
$email = $_REQUEST['Email'];
$message = $_REQUEST['Message'];

//check input fields

if(empty($name) || empty($email) || empty($message))
{
    echo "Please, fill out all fields.";
}
else
{
    mail("fontelakevin0828@gmail.com", "PORTFOLIO MESSAGE RECEIVED", $message, "From: $name <$email>");
    echo "<script type ='text/javascript'> alert('Message sent');
           window.history.log(-1);
    </script>";
}

?>