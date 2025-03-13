import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule to use *ngFor
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: "Watch Your Health Pvt. Ltd.",
      role: "Software Engineer",
      duration: "May 2024 – Present",
      location: "Bangalore, India",
      responsibilities: [
        "Developed and optimized front-end components with Angular, implementing lazy loading and NgRx.",
        "Integrated RESTful APIs and backend logic for seamless data exchange.",
        "Built .NET APIs and optimized SQL stored procedures, improving performance.",
      ]
    },
    {
      company: "Zobi Web Solutions",
      role: ".NET Full-Stack Developer",
      duration: "July 2023 – May 2024",
      location: "Ahmedabad, Gujarat, India",
      responsibilities: [
        "Developed scalable multi-tiered applications using C# & .NET, improving efficiency by 30%.",
        "Optimized SQL stored procedures, reducing database response time by 20%.",
        "Enhanced UI/UX using React, improving user engagement by 25%.",
      ]
    },
    {
      company: "Techpro Lab",
      role: "Java Developer",
      duration: "Dec 2022 – Jun 2023",
      location: "Patna, Bihar, India",
      responsibilities: [
        "Implemented Java OOP principles, improving code modularity and maintainability.",
        "Worked with Java Collections Framework for efficient data handling.",
        "Utilized Spring Framework for backend development, enhancing dependency injection.",
      ]
    }
  ];
}
