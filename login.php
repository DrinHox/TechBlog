<?php
session_start();

// Establish a database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "techblogdatabase";

$conn = new mysqli($servername, $username, $password, $database);


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validate input (you can add more validation as needed)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        return;
    }

    // Check user credentials against the database
    $selectQuery = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($selectQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row["password"];

        if (password_verify($password, $hashedPassword)) {
            echo "Login successful!";
            header("Location: dashboard.php"); // Replace "dashboard.php" with your desired page
            exit();
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
}

$conn->close();
?>
