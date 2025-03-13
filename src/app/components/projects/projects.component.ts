import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: "IoT Based Smart System",
      description: [
        "Engineered an IoT-based Smart System for baby safety and health monitoring, utilizing facial recognition with React and Python for real-time notifications.",
        "Developed sensor data capture and processing using Arduino and embedded C, enabling real-time monitoring and analysis.",
        "Tools Used: React, Firebase, Python."
      ],
      liveUrl: "https://645827a0b62351366a288c1e--fabulous-capybara-a577a3.netlify.app/",
      repoUrl: "https://github.com/Khervyngupta/SmartSystem"
    },
    {
      title: "IMDB Clone App",
      description: [
      "Developed an IMDB-inspired web app with dynamic UI using JavaScript, showcasing movie details and search functionality.",
      "Tools Used: React, MongoDB, Express, NodeJs"
      ],
      liveUrl: "https://khervyngupta.github.io/IMDBCloneJS/",
      repoUrl: "https://github.com/Khervyngupta/IMDBCloneJS"
    },
    {
      title: "Contact List App",
      description: [
        "Built a Contact List Application using React, with features for adding, deleting, and updating contacts, hosted for easy accessibility.",
        "Tools Used: React, MongoDB, Express, NodeJs"
      ],
        liveUrl: "https://contactlist-khervyn.netlify.app/",
      repoUrl: "https://github.com/Khervyngupta/ContactListReact"
    },
    {
      title: "Login Registration",
      description: [
        "Developed a full-stack authentication system using MERN stack, featuring secure login, signup, and password recovery, ensuring robust user data protection.",
        "Tools Used: MongoDB, React, Express, NodeJs"
      ],
        // liveUrl: "https://myecommerce.com",
      repoUrl: "https://github.com/Khervyngupta/Login-Signup-MERN"
    },
    {
      title: "Portfolio Website",
      description: 
      ["A personal portfolio website built using Angular, showcasing experience, projects, and skills with a dark/light theme toggle.",
      ],
        liveUrl: "https://yourportfolio.com",
      repoUrl: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Train Inquiry System",
      description: ["A web application for train inquiries, built with .NET Web API, Angular, and SQL for real-time train status updates.",
      ],
        liveUrl: "https://traininquiry.com",
      repoUrl: "https://github.com/yourusername/train-inquiry"
    },
    {
      title: "AI Chatbot",
      description: 
      ["An AI-powered chatbot using NLP and machine learning for automated customer support responses.",
      ],
        liveUrl: "",
      repoUrl: "https://github.com/yourusername/ai-chatbot"
    },
    {
      title: "E-Commerce Platform",
      description: [
        "A full-stack e-commerce web application using .NET, Angular, and SQL with secure user authentication and payment integration.",
      ],
        liveUrl: "https://myecommerce.com",
      repoUrl: "https://github.com/yourusername/ecommerce"
    }
  ];
}
