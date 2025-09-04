# TutorConnect Platform

A simple web platform that connects college students with qualified tutors using an innovative quantum matching algorithm.

## 🚀 Features

- **Quantum Matching Algorithm**: Advanced matching system that pairs students with the most compatible tutors
- **Tutor Search & Filter**: Browse tutors by subject, experience, price, and specialties
- **Easy Registration**: Simple signup process for both students and tutors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Filtering**: Instant search results as you type
- **Interactive Animations**: Engaging user interface with smooth transitions

## 📁 Project Structure

```
TutorConnect/
├── index.html              # Main landing page
├── find-tutor.html         # Tutor search and browse page
├── become-tutor.html       # Tutor registration page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript functionality
├── tutor-search.css        # Styles for tutor search page
├── tutor-search.js         # Search and filter functionality
├── tutor-signup.css        # Styles for tutor signup page
├── tutor-signup.js         # Signup form functionality
├── README.md               # This file
└── trickle/
    ├── notes/
    │   └── README.md       # Project documentation
    └── rules/
        └── rule_for_readme_maintenance.md
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with modern features (Grid, Flexbox, animations)
- **Vanilla JavaScript**: Pure JavaScript without external dependencies
- **No Build Tools**: Runs directly in the browser

## 🎯 Getting Started

1. **Clone or Download**: Get the project files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Navigate**: Use the navigation menu to explore different pages
4. **Test Features**: 
   - Try the quantum matching on the home page
   - Browse tutors on the search page
   - Fill out the tutor registration form

## 📱 Pages Overview

### Home Page (`index.html`)
- Hero section with quantum matching call-to-action
- Features showcase highlighting platform benefits
- Step-by-step how it works section
- Statistics and social proof

### Find Tutor (`find-tutor.html`)
- Search functionality by name or subject
- Filter by subject categories
- Quantum match button for personalized results
- Tutor cards displaying ratings, prices, and specialties

### Become Tutor (`become-tutor.html`)
- Registration form for new tutors
- Personal and teaching information collection
- Form validation and submission feedback

## 🎨 Design Features

- **Modern UI**: Clean, professional design with blue color scheme
- **Gradient Backgrounds**: Eye-catching gradients for hero sections
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile Responsive**: Optimized for all screen sizes
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Customization

### Colors
The main color scheme uses:
- Primary Blue: `#3B82F6`
- Secondary Blue: `#1E40AF` 
- Accent Yellow: `#F59E0B`
- Gradient Purple: `#8B5CF6`

### Adding New Tutors
Edit the `tutors` array in `tutor-search.js` to add more sample tutors:

```javascript
{
    id: 7,
    name: 'Your Name',
    subject: 'Your Subject',
    rating: 4.8,
    price: 40,
    experience: 5,
    specialties: ['Specialty 1', 'Specialty 2'],
    matchScore: 90,
    avatar: 'YN'
}
```

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Real-time messaging between students and tutors  
- [ ] Payment integration
- [ ] Advanced filtering options (price range, availability)
- [ ] Rating and review system
- [ ] Calendar scheduling integration
- [ ] Video conferencing integration
- [ ] Mobile app development

## 📞 Support

For questions or issues, contact the development team or submit an issue in the project repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤