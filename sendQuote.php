<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'Outlook.com';                      // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'masolejoseph@live.com';           // SMTP username
    $mail->Password = 'mcjoemasole11210';                 // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $completeName = $_POST['name'];
    $mailto = $_POST["email"];
    
    $mailMsg = $_POST['phoneNumber'];
	 $miniCart = $_POST['cart'];
	 $totalPrice = $_POST['totalPrice'];
	 $miniCartPrice = $_POST['miniCartPrice'];

    //Recipients
    $mail->setFrom('masolejoseph@live.com');
   
    $mail->addAddress('masolejoseph@gmail.com');
   
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "quote";
    $mail->Body    = $completeName.':'.$mailto .$mailMsg.':'.' sent the following message: '. $minicart . $miniCartPrice. $totalPrice ;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
	
    echo 'Message has been sent';
	
} catch (Exception $e) {
	
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

