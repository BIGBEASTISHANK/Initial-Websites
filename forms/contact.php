<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    
    $name = 'hi';
    $visitor_email = 'hi1';
    $message = 'h2';

    $email_form = 'bigbeastishank@website.com';

    $email_subject = "New Form Submition";

    $email_body = "Name: $name.\n";
                    "Email: $visitor_email.\n";
                        "Message: $message.\n";
                            
    $to = "pranjal3211p@gmail.com";
    $header = "From: $email_form \r\n";
    mail($to,$email_subject,$email_body,$header);
    header("Location: ../");

?>