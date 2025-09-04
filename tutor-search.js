// Sample tutor data
const tutors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        subject: 'Mathematics',
        rating: 4.9,
        price: 45,
        experience: 8,
        specialties: ['Calculus', 'Linear Algebra', 'Statistics'],
        matchScore: 98,
        avatar: 'SJ'
    },
    {
        id: 2,
        name: 'Prof. Michael Chen',
        subject: 'Physics',
        rating: 4.8,
        price: 55,
        experience: 12,
        specialties: ['Quantum Physics', 'Thermodynamics', 'Mechanics'],
        matchScore: 95,
        avatar: 'MC'
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        subject: 'Chemistry',
        rating: 4.9,
        price: 40,
        experience: 6,
        specialties: ['Organic Chemistry', 'Biochemistry', 'Lab Techniques'],
        matchScore: 92,
        avatar: 'ER'
    },
    {
        id: 4,
        name: 'James Wilson',
        subject: 'Computer Science',
        rating: 4.7,
        price: 50,
        experience: 5,
        specialties: ['Python', 'Web Development', 'Data Structures'],
        matchScore: 89,
        avatar: 'JW'
    },
    {
        id: 5,
        name: 'Lisa Thompson',
        subject: 'Biology',
        rating: 4.8,
        price: 38,
        experience: 7,
        specialties: ['Cell Biology', 'Genetics', 'Ecology'],
        matchScore: 87,
        avatar: 'LT'
    },
    {
        id: 6,
        name: 'David Park',
        subject: 'English',
        rating: 4.6,
        price: 35,
        experience: 4,
        specialties: ['Writing', 'Literature', 'Grammar'],
        matchScore: 85,
        avatar: 'DP'
    }
];

let currentTutors = [...tutors];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayTutors(currentTutors);
    setupFilters();
});

// Display tutors in grid
function displayTutors(tutorList) {
    const grid = document.getElementById('tutorsGrid');
    
    if (tutorList.length === 0) {
        grid.innerHTML = '<div class="no-results">No tutors found matching your criteria.</div>';
        return;
    }
    
    grid.innerHTML = tutorList.map(tutor => `
        <div class="tutor-card">
            <div class="match-score">${tutor.matchScore}% Match</div>
            <div class="tutor-header">
                <div class="tutor-avatar">${tutor.avatar}</div>
                <div class="tutor-info">
                    <h3>${tutor.name}</h3>
                    <div class="tutor-subject">${tutor.subject}</div>
                    <div class="tutor-rating">
                        <span class="stars">★★★★★</span>
                        <span>${tutor.rating}</span>
                    </div>
                </div>
            </div>
            <div class="tutor-details">
                <div class="detail-item">
                    <span>Price:</span>
                    <span>$${tutor.price}/hour</span>
                </div>
                <div class="detail-item">
                    <span>Experience:</span>
                    <span>${tutor.experience} years</span>
                </div>
            </div>
            <div class="specialties">
                <strong>Specialties:</strong>
                <div class="specialty-tags">
                    ${tutor.specialties.map(specialty => `<span class="tag">${specialty}</span>`).join('')}
                </div>
            </div>
            <div class="tutor-actions">
                <button class="btn-contact" onclick="contactTutor(${tutor.id})">Contact Tutor</button>
                <a href="#" class="btn-view">View Profile</a>
            </div>
        </div>
    `).join('');
}

// Setup search and filter functionality
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const subjectFilter = document.getElementById('subjectFilter');
    
    searchInput.addEventListener('input', filterTutors);
    subjectFilter.addEventListener('change', filterTutors);
}

// Filter tutors based on search and subject
function filterTutors() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedSubject = document.getElementById('subjectFilter').value;
    
    const filtered = tutors.filter(tutor => {
        const matchesSearch = tutor.name.toLowerCase().includes(searchTerm) ||
                             tutor.subject.toLowerCase().includes(searchTerm) ||
                             tutor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm));
        
        const matchesSubject = !selectedSubject || tutor.subject === selectedSubject;
        
        return matchesSearch && matchesSubject;
    });
    
    displayTutors(filtered);
}

// Quantum match functionality
function quantumMatchTutors() {
    const btn = document.querySelector('.quantum-btn.small');
    const text = document.getElementById('quantumMatchText');
    
    btn.style.background = 'linear-gradient(45deg, #8B5CF6, #3B82F6)';
    text.textContent = 'Matching...';
    btn.style.animation = 'pulse 0.5s infinite';
    
    // Add pulse animation
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
        text.textContent = 'Matched!';
        btn.style.background = 'linear-gradient(45deg, #10B981, #059669)';
        
        // Sort tutors by match score and display
        const sortedTutors = [...tutors].sort((a, b) => b.matchScore - a.matchScore);
        displayTutors(sortedTutors);
        
        setTimeout(() => {
            text.textContent = 'Quantum Match';
            btn.style.background = 'linear-gradient(45deg, #8B5CF6, #3B82F6)';
        }, 2000);
    }, 2000);
}

// Contact tutor functionality
function contactTutor(tutorId) {
    const tutor = tutors.find(t => t.id === tutorId);
    alert(`Contacting ${tutor.name}!\n\nYou will be redirected to send a message to this tutor.`);
}
