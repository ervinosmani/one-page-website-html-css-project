<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $message = $_POST["message"];

    // Create the email message
    $to = "ervinosmani3@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Mobile: $mobile\n";
    $emailMessage .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $emailMessage, $headers);

    // Redirect back to the contact form with a success message
    header("Location: contact-form-success.html");
    exit();
}
?>
