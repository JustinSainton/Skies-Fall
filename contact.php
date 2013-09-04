<?php

if ( isset( $_POST ) ) {

	if ( ! empty( $_POST['gotye'] ) )
		die( json_encode( array( 'errormsg' => 'We think you are a spammer.' ) ) );

	if ( empty( $_POST['name'] ) || empty( $_POST['email'] ) || empty( $_POST['message'] ) )
		die( json_encode( array( 'errormsg' => 'All fields are required.' ) ) );

	$name    = filter_var( $_POST['name']    , FILTER_SANITIZE_STRING );
	$email   = filter_var( $_POST['email']   , FILTER_SANITIZE_EMAIL );
	$message = filter_var( $_POST['message'] , FILTER_SANITIZE_STRING );

	$to      = 'justinsainton@gmail.com';
	$subject = 'Message from Contact Form on SkiesFall.com';
	$headers = "From: $name <$email>\r\n";

	if ( mail( $to, $subject, $message, $headers ) ) {
		die( json_encode( array( 'success' => 'Thanks for getting in touch.' ) ) );
	}

}