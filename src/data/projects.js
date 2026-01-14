import { image } from "framer-motion/client";

export const projects = [
  // Freelance Projects
  
  // Personal Projects
  {
    id: 1,
    title: "Techware Store",
    description: "Full-featured e-commerce platform with secure payment integration using PayPal Braintree. Includes product catalog, shopping cart, and order management.",
    technologies: ["React", "Node.js", "MongoDB", "PayPal Braintree", "Express"],
    githubUrl: "https://github.com/Yajat047/techware",
    liveUrl: "https://fse-project-one.vercel.app/",
    image: "/projects/techware.png",
    category: "personal"
  }, 
  {
    id: 2,
    title: "Get Linked",
    description: "MERN-based community platform for networking and collaboration. Features include user profiles, posts, messaging, and real-time notifications.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Yajat047/Community-Platform",
    liveUrl: "https://getlinked.yajat.dev/",
    image: "/projects/getlinked.png",
    category: "personal"
  },
  {
    id: 3,
    title: "E-Healthcare Management System",
    description: "MERN stack application with Python ML integration for disease prediction. Features include patient management, appointment scheduling, and ML-powered diagnosis assistance.",
    technologies: ["React", "Node.js", "Flask/Python", "Machine Learning", "JavaScript", "MongoDB", "Express" ],
    githubUrl: "https://github.com/Yajat047/IP-Healthcare",
    liveUrl: "", 
    image: "/projects/healthcare.png",
    category: "personal"
  },
  
  {
    id: 4,
    title: "Wine Quality Classifier",
    description: "Supervised machine learning model for predicting wine quality based on chemical properties. Achieved high accuracy using various ML algorithms.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/Yajat047/aiml_wine_quality",
    liveUrl: "",
    image: "/projects/wine.png",
    category: "personal"
  },
  {
    id: 5,
    title: "CodeMate (Under Development)",
    description: "Real-time collaborative coding platform with voice support.",
    technologies: ["React", "Node.js", "JavaScript","PeerJS/WebRTC", "Socket.io",  "MongoDB", "Express"],
    githubUrl: "https://github.com/Yajat047/CodeMate-Project",
    liveUrl: "https://codemate.yajat.dev/",
    image: "/projects/codemate.png",
    category: "personal"
  },

  {
    id: 6,
    title: "Cafe Management System",
    description: "Web-based reservation and ordering system for cafes. Features table booking, menu management, and order tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Yajat047/cafemanagement",
    liveUrl: "https://cafemanagement-ashen.vercel.app/",
    image: "/projects/cafe.png",
    category: "personal"
  },
  {
    id: 7,
    title: "Musicology",
    description: "Dance Courses Demo Website",
    technologies: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Yajat047/musicology-fee",
    liveUrl: "https://musicology-fee.vercel.app/",
    image: "/projects/musicology.png",
    category: "personal"
  },
  {
    id: 8,
    title: "York Street Homes",
    description: "Website for Professional Cleaning and maintenance services in London",
    technologies: ["React", "NodeJs","MongoDB", "Express","JavaScript","Cloudflare", "Linux"],
    // githubUrl: "",
    liveUrl: "https://yorkstreethomes.com/",
    image: "/projects/yorkstreethomes.png",
    category: "freelance"
  },
  {
    id: 9,
    title: "Advait Soluition",
    description: "Website for BricsCAD software retailer in India",
    technologies: ["React", "NodeJs","MongoDB", "Express","JavaScript","Cloudflare", "Linux"],
    // githubUrl: "",
    liveUrl: "https://advaitsolution.com/",
    image: "/projects/advaitsolution.png",
    category: "freelance"
  }
];
