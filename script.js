// Quantum Match Animation
function quantumMatch() {
    const btn = document.querySelector('.quantum-btn');
    const text = document.getElementById('quantum-text');
    const lightning = document.querySelector('.lightning');
    
    // Start animation
    btn.style.background = 'linear-gradient(45deg, #8B5CF6, #3B82F6)';
    text.textContent = 'Quantum Matching...';
    lightning.textContent = '⚙️';
    btn.style.animation = 'pulse 0.5s infinite';
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        btn.style.animation = '';
        text.textContent = 'Match Found!';
        lightning.textContent = '✨';
        btn.style.background = 'linear-gradient(45deg, #10B981, #059669)';
        
        setTimeout(() => {
            window.location.href = 'find-tutor.html';
        }, 1000);
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation for page transitions
function showLoading() {
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s';
}

// Add to all navigation links
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', showLoading);
});