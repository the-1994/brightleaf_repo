<?php
$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array
	
	if (empty($_POST['email'])){
		$errors['email'] = 'Email is required.';
		}
	if ((!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) && (!empty($_POST['email'])) ){
  $errors['email'] = "Invalid format"; 
}
	if (empty($_POST['firstname']))
		$errors['firstname'] = 'First Name is required.';
	if (empty($_POST['lastname']))
		$errors['lastname'] = 'Last Name is required.';

	if (empty($_POST['msg']))
		$errors['msg'] = 'Message is required.';

// return a response ===========================================================
	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
	
		$message = "First Name: ".$_POST["firstname"]. "\r\n";
		$message .= "Last Name: ".$_POST["lastname"]. "\r\n";
		$message .= "Email: ".$_POST["email"]. "\r\n";
		$message .= "Message: ".$_POST["msg"]. "\r\n";
		 $headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <webmaster@example.com>' . "\r\n";
		$headers .= 'Cc: myboss@example.com' . "\r\n";
 // mail();
 mail('mbhalotkar@techcraftz.com','Contact US',$message,$header);
		// if there are no errors process our form, then return a message

		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
	}
	
	// return all our data to an AJAX call
	echo json_encode($data);
	?>