document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const whatsappLink = document.getElementById('whatsappLink');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0AMessage: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+381638386237&text=${whatsappMessage}`;

        whatsappLink.href = whatsappURL;
        window.open(whatsappURL, '_blank');
    });
});
