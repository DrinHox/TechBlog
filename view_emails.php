<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "techblogdatabase";

$conn = new mysqli($servername, $username, $password, $database);
// Select all emails from the users table
$selectQuery = "SELECT email FROM users";
$result = $conn->query($selectQuery);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No registered emails found.";
}

$conn->close();
?>