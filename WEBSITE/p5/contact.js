document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        
        submitBtn.style.transform = 'scale(0.95)';
        submitBtn.style.backgroundColor = 'white';
        submitBtn.style.color = '#2c3e50';

        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
            submitBtn.style.backgroundColor = '#3498db';
            submitBtn.style.color = 'white';
            
            // Here you would typically add form submission logic
            alert('Message sent successfully!');
        }, 300);
    });

    // New animation for accessories section
    const accessoryItems = document.querySelectorAll('.accessory-item');
    
    accessoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});