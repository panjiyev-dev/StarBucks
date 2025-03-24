window.addEventListener('DOMContentLoaded', () => {

    // button top 
    const topBtn = document.querySelector('#top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    // scrol 
    const nextBtn = document.querySelector('#next-btn'),
        scrolCards = document.querySelectorAll('.scrol-cards');

    nextBtn.addEventListener('click', () => {
        
    });

})