

document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('signin-btn');

    if (signInButton) {
        signInButton.addEventListener('click', function() {
            
            var username = prompt('Enter your username:');
            var password = prompt('Enter your password:');

            
            if (username && password) {
                
                alert('Successful Sign In!\nUsername: ' + username);
            } else {
                alert('Sign In canceled or invalid input.');
            }
        });
    }
});
