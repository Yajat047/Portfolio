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

## 🎨 Color Schemes

The portfolio comes with **9 pre-configured color schemes**. To change the theme:

1. Open `tailwind.config.js`
2. Comment out the active theme
3. Uncomment your preferred theme

### Available Themes:

1. **🟣 Purple & Blue** (Default) - Modern, vibrant purple
   ```javascript
   primary: '#0f0e17'
   secondary: '#1a1926'
   accent: '#a786ff'
   ```

2. **🔵 Navy & Teal** - Professional, developer-focused
   ```javascript
   primary: '#0a192f'
   secondary: '#112240'
   accent: '#64ffda'
   ```

3. **🟠 Orange & Dark** - Bold, energetic orange accents
   ```javascript
   primary: '#1a1a2e'
   secondary: '#16213e'
   accent: '#ff6700'
   ```

4. **🔴 Red & Black** - Striking, high-contrast red
   ```javascript
   primary: '#0d0d0d'
   secondary: '#1a1a1a'
   accent: '#ff0055'
   ```

5. **🟢 Green & Dark** (Matrix Style) - Hacker/terminal aesthetic
   ```javascript
   primary: '#0d1117'
   secondary: '#161b22'
   accent: '#39ff14'
   ```

6. **💙 Blue & Gold** - Elegant, premium look
   ```javascript
   primary: '#0c1226'
   secondary: '#1a2332'
   accent: '#ffc107'
   ```

7. **🌸 Pink & Purple** - Creative, artistic vibe
   ```javascript
   primary: '#1a0b2e'
   secondary: '#2d1b4e'
   accent: '#ff6ec7'
   ```

8. **🌊 Ocean Blue** - Cool, calming ocean theme
   ```javascript
   primary: '#001f3f'
   secondary: '#003459'
   accent: '#00d9ff'
   ```

9. **🌙 Midnight Purple** - Deep, mysterious purple
   ```javascript
   primary: '#170a1c'
   secondary: '#2d1b3d'
   accent: '#c77dff'
   ```

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

