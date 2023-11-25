

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

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    
    let count = 0;

    function nextSlide() {
        count++;
        if (count >= slider.children.length) {
            count = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(${-count * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});