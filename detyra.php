<?php
session_start();

// Kontrolloni nëse forma është paraqitur
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Merrni të dhënat e postuara nga forma
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Kontrolloni në bazë të të dhënave të pretenduara nga formulari
    // Kjo duhet të ndryshohet për të përshtatur me baza tuaj të të dhënave
    // Kontrolloni nëse përdoruesi ekziston në bazën tuaj të të dhënave dhe nëse fjalëkalimi është i saktë
    if ($username == 'username' && $password == 'password') {
        // Regjistro sesionin
        $_SESSION['username'] = $username;
        $_SESSION['login_time'] = time(); // Regjistroni kohën e hyrjes në sistem

        // Përcaktoni nëse përdoruesi është admin ose jo (kjo duhet të përshtatet me bazën e të dhënave)
        $is_admin = false; // Nëse është admin, ndryshoni këtë në true

        // Në bazë të roli, përcaktoni ku duhet të ridrejtohet përdoruesi
        if ($is_admin) {
            header('Location: dashboard.php');
        } else {
            header('Location: home.php');
        }
        exit();
    } else {
        // Nëse të dhënat e hyrjes janë të gabuara, shfaqni një mesazh për përdoruesin
        $error = "Të dhënat e hyrjes janë të gabuara. Ju lutemi provoni përsëri!";
    }
}
?>

<!-- HTML e formës për hyrjen -->
<!DOCTYPE html>
<html>
<head>
    <title> Test Login Form</title>
</head>
<body>
    <h2> Test1 Login Form</h2>
    <?php if (isset($error)) { ?>
        <p><?php echo $error; ?></p>
    <?php } ?>
    <form method="post" action="">
        <label for="username">Username:</label>
        <input type="text" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>