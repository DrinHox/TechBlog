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


    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.dots');
    let count = 0;
    let slideInterval;

    function nextSlide() {
        count++;
        if (count >= slider.children.length -1) {
            count = 0;
        }
        updateSlider();
    }

    function previousSlide() {
        count--;
        if (count < 0) {
            count = slider.children.length - 2;
        }
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(${-count * 100}%)`;

        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelectorAll('.dot')[count].classList.add('active');
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            count = i;
            updateSlider();
        });
    }

    const previousArrow = document.querySelector('.previous');
    const nextArrow = document.querySelector('.next');

    previousArrow.addEventListener('click', () => {
        previousSlide();
        resetSlideInterval();
    });
    nextArrow.addEventListener('click', () => {
        nextSlide();
        resetSlideInterval();
    });

    updateSlider();
    resetSlideInterval();


});