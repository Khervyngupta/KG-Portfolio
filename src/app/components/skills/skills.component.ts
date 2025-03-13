import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule], // ✅ Required for *ngFor and Material Icons
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: "Angular", icon: "code" },
    { name: "React", icon: "web" },
    { name: ".NET (C#)", icon: "memory" },
    { name: "SQL & Database Management", icon: "storage" },
    { name: "MongoDB", icon: "storage" },
    { name: "Express.js", icon: "route" },
    { name: "Node.js", icon: "device_hub" },
    { name: "JavaScript & TypeScript", icon: "language" },
    { name: "RESTful APIs & Backend Development", icon: "api" },
    { name: "Machine Learning & AI", icon: "smart_toy" },
    { name: "Cloud Computing (AWS, Azure)", icon: "cloud" },
    { name: "Git & Version Control", icon: "commit" },
    { name: "Docker & CI/CD Pipelines", icon: "build_circle" }
  ];
  
}
