<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "techblogdatabase";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $newEmail = $_POST["new-email"];
    $newPassword = $_POST["new-password"];
    $confirmPassword = $_POST["confirm-password"];

    // Validate input (you can add more validation as needed)
    if (!filter_var($newEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        return;
    }

    if (strlen($newPassword) < 8) {
        echo "Password must be at least 8 characters long";
        return;
    }

    if ($newPassword !== $confirmPassword) {
        echo "Passwords do not match";
        return;
    }

    // Check if the email already exists
    $checkEmailQuery = "SELECT * FROM users WHERE email = '$newEmail'";
    $checkEmailResult = $conn->query($checkEmailQuery);

    if ($checkEmailResult->num_rows > 0) {
        echo "Email already registered";
    } else {
        // Hash the password before storing
        $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

        // Insert new user into the database
        $insertQuery = "INSERT INTO users (email, password) VALUES ('$newEmail', '$hashedPassword')";

        if ($conn->query($insertQuery) === TRUE) {
            echo "Registration successful!";
            // Here, you can redirect the user to the login page or any other page
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

$conn->close();
?>