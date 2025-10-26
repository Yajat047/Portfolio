# 🚀 Yajat Dureja - Portfolio Website

A modern, animated portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful dark color scheme with accent colors
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast loading
- 🎯 **Easy to Customize** - All data managed through simple constant files
- 📦 **Component-Based** - Modular architecture for easy maintenance

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.12
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Routing:** React Router DOM

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── projects/          # Project images
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechStack.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data constants
│   │   ├── personalInfo.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   └── certifications.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yajat047/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

Edit `src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Add Experience

Edit `src/data/experience.js` and add new entries to the array:
```javascript
{
  id: 3,
  company: "Company Name",
  position: "Position",
  duration: "Date Range",
  location: "Location",
  description: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech 1", "Tech 2"],
}
```

### Add Projects

1. Add project images to `public/projects/`
2. Edit `src/data/projects.js`:
```javascript
{
  id: 7,
  title: "Project Name",
  description: "Project description",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  image: "/projects/your-image.png",
}
```

### Update Skills

Edit `src/data/skills.js` to add or modify your tech stack.

### Add Education

Edit `src/data/education.js` to add educational background.

### Add Certifications

Edit `src/data/certifications.js` to add your certifications.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

You can deploy this portfolio to:
- **Netlify:** Connect your GitHub repo and deploy automatically
- **Vercel:** Import your project and deploy with zero configuration
- **GitHub Pages:** Use GitHub Actions for automatic deployment

## 🎯 Sections

1. **Hero** - Introduction with animated graphics and social links
2. **Tech Stack** - Categorized display of technical skills
3. **Experience** - Professional work experience cards
4. **Projects** - Showcase of personal and professional projects
5. **Education** - Academic background
6. **Certifications** - Professional certifications and courses
7. **Contact** - Get in touch section with social media links

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!



## 👤 Author

**Yajat Dureja**
- GitHub: [@Yajat047](https://github.com/Yajat047)
- LinkedIn: [yajat47](https://linkedin.com/in/yajat47)
- Email: yajatdureja@gmail.com

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repo if you find it helpful!**

