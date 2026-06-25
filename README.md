# NayePankh Foundation - NGO Website

A modern, responsive, and professional website built for a non-governmental organization (NGO). This project was designed to serve as a comprehensive submission for Front End, Web Development, and Full Stack internship assessments.

## 🚀 Live Demo Overview
This project contains purely static assets requiring no backend server to view the frontend interface.

## 💻 Tech Stack
* **HTML5**: Semantic markup and structure.
* **CSS3**: Custom styling, Flexbox/Grid layouts, CSS Variables, and responsive media queries.
* **JavaScript (Vanilla)**: DOM manipulation, form validation, animations, and LocalStorage implementation.

## ✨ Key Features
1. **Fully Responsive Design**: Fluid layouts that adapt perfectly to Mobile, Tablet, and Desktop screens.
2. **Dark/Light Mode Toggle**: Uses CSS variables and saves the user preference in the browser's `localStorage`.
3. **Animated Statistics**: Intersection Observer API is utilized to trigger dynamic number counters when the user scrolls to the impact section.
4. **Scroll Animations**: Smooth fade-in and slide-up animations for content blocks as they enter the viewport.
5. **Volunteer Registration Form**: 
   * Form validation (e.g., 10-digit phone number).
   * Temporarily stores applicant data directly into `localStorage`.
   * Dynamic success messages upon submission.
6. **Preloader**: Custom CSS animated loader that waits for the DOM to be fully loaded.
7. **Scroll-to-Top Button**: Contextual button that appears after scrolling down to ensure easy navigation.
8. **Modern Mobile Navigation**: Hamburger menu with slide-in navigation links.

## 📁 File Structure
* `index.html` - The main structure and content of the web page.
* `style.css` - All styling rules, layout constraints, theme variables, and keyframe animations.
* `script.js` - Interactive logic, DOM event listeners, LocalStorage handlers, and API observers.
* `README.md` - Documentation and project overview.

## ⚙️ How to Run
1. Download or clone this repository/files.
2. Ensure all four files (`index.html`, `style.css`, `script.js`, `README.md`) are saved in the same root folder.
3. Simply double-click `index.html` to open it in your default web browser. No local server is strictly required, though using VS Code's "Live Server" extension is recommended for the best development experience.
4. To view the stored Volunteer Form submissions, open your browser's Developer Tools (F12) -> Application -> Local Storage -> Look for `volunteerRegistrations`.