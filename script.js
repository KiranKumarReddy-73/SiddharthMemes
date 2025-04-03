const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const body = document.body;

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to the window
        const isActive = navList.classList.toggle('active');
        mobileMenu.classList.toggle('close-icon', isActive); // Add or remove close-icon based on active state
        if (isActive) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close nav-list when navigating to a new page
    window.addEventListener('beforeunload', () => {
        navList.classList.remove('active');
        mobileMenu.classList.remove('close-icon');
        body.style.overflow = '';
    });
}

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer) {
            answer.classList.toggle('visible');
        }
    });
});

document.querySelectorAll('.faq-answer').forEach(answer => {
    if (answer && !answer.classList.contains('visible')) {
        answer.classList.add('hidden');
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".events-container");
    const leftButton = document.querySelector(".scroll-button.left");
    const rightButton = document.querySelector(".scroll-button.right");

    // Scroll to the right when right button is clicked
    rightButton.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
    });

    // Scroll to the left when left button is clicked
    leftButton.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
    });

});
