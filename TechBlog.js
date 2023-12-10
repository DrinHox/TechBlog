document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.dots');
    let count = 0;
    let slideInterval;

    function nextSlide() {
        count++;
        if (count >= slider.children.length) {
            count = 0;
        }
        updateSlider();
    }
    
    function previousSlide() {
        count--;
        if (count < 0) {
            count = slider.children.length - 1;
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

window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    document.body.style.backgroundPositionY = -scrollPosition * 0.3 + 'px';
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}


window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
};

function validateSignInForm() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    emailError.innerText = '';
    passwordError.innerText = '';

    if (!validateEmail(emailInput.value)) {
        emailError.innerText = 'Invalid email format';
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        passwordError.innerText = 'Password must be at least 8 characters long and contain one uppercase letter.';
        return;
    }
    if (emailError.innerText === '' && passwordError.innerText === '') {
        closeModal('signin-modal');
        emailInput.value = '';
        passwordInput.value = '';
    }


}

function validateEmail(email) {

    let emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function validatePassword(password) {

    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    return passwordRegex.test(password);

}


function validateRegisterForm() {
    let newEmailInput = document.getElementById('new-email');
    let newPasswordInput = document.getElementById('new-password');
    let confirmPasswordInput = document.getElementById('confirm-password');
    let newEmailError = document.getElementById('newEmailError');
    let newPasswordError = document.getElementById('newPasswordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    newEmailError.innerText = '';
    newPasswordError.innerText = '';
    confirmPasswordError.innerText = '';

    if (!validateEmail(newEmailInput.value)) {
        newEmailError.innerText = 'Invalid email format';
        return false;
    }

    if (!validatePassword(newPasswordInput.value)) {
        newPasswordError.innerText = 'Password must be at least 8 characters long and contain one uppercase letter.';
        return false;
    }

    if (newPasswordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.innerText = 'Passwords do not match.';
        return false;
    }

    if (newEmailError.innerText === '' && newPasswordError.innerText === '' && confirmPasswordError.innerText === '') {
        closeModal('register-modal');
        newEmailInput.value = '';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    }
}

function validateNewEmail(newEmailInput) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validateNewPassword(newPasswordInput) {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}




document.addEventListener('DOMContentLoaded', function () {

    const categories = document.querySelectorAll('.dropdown-content a');
    categories.forEach(category => {
        category.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedCategory = this.dataset.category;

            const articles = document.querySelectorAll('.articles article');
            articles.forEach(article => {
                const articleCategories = article.dataset.categories.split(' ');
                if (selectedCategory === 'all' || articleCategories.includes(selectedCategory)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
    const mainCategoryBtn = document.getElementById('main-category');
    mainCategoryBtn.addEventListener('click', function () {
        const articles = document.querySelectorAll('.articles article');
        articles.forEach(article => {
            article.style.display = 'block';
        });
    });
});
