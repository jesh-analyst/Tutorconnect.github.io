document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tutorForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            experience: document.getElementById('experience').value,
            price: document.getElementById('price').value
        };
        
        // Show success message
        const btn = form.querySelector('.quantum-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<span>⚙️</span><span>Processing...</span>';
        btn.style.background = 'linear-gradient(45deg, #8B5CF6, #3B82F6)';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<span>✅</span><span>Application Submitted!</span>';
            btn.style.background = 'linear-gradient(45deg, #10B981, #059669)';
            
            setTimeout(() => {
                alert('Thank you for joining TutorConnect! We will review your application and contact you soon.');
                form.reset();
                btn.innerHTML = originalText;
                btn.style.background = 'linear-gradient(45deg, #8B5CF6, #3B82F6)';
                btn.disabled = false;
            }, 2000);
        }, 2000);
    });
});