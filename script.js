document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMore');
    const moreInfoDiv = document.getElementById('moreInfo');

    showMoreButton.addEventListener('click', function() {
        if (moreInfoDiv.classList.contains('hidden')) {
            moreInfoDiv.classList.remove('hidden');
            showMoreButton.textContent = 'Show Less';
        } else {
            moreInfoDiv.classList.add('hidden');
            showMoreButton.textContent = 'Learn More';
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
