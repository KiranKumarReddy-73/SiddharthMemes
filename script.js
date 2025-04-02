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
