<?php
    $to      = 'eltongonc@gmail.com';
    $name    = $_POST["name"];
    $email   = $_POST["email"];
    $text    = $_POST["message"];
    $phone 	 = $_POST["phone"];
    $subject = $_POST["subject"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>A visitor submitted a contact request</td>
        </tr>
        <tr>
            <td>'.$name.'  '.$subject.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>phone: '.$phone.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>
    </table>';

	// validate the user email
	if(IsInjected($email)) {
		echo "Bad email value!";
		exit;
	}

    if (@mail($to, $email, $message, $headers)) {
		header('Location: /succes');
    }else {
		header('Location: /failed');
    }
	
	function IsInjected($str) {
		$injections = array('(\n+)',
			'(\r+)',
			'(\t+)',
			'(%0A+)',
			'(%0D+)',
			'(%08+)',
			'(%09+)'
			);
					
		$inject = join('|', $injections);
		$inject = "/$inject/i";
		if(preg_match($inject,$str)) {
		return true;
		} else {
		return false;
		}
	}
?>
