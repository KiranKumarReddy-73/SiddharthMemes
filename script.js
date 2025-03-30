const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const body = document.body;

mobileMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to the window
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        body.style.overflow = 'hidden'; 
    } else {
        body.style.overflow = ''; 
    }
});

window.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
        body.style.overflow = '';
    }
});


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});