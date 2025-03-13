import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngFor to work
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = [
    {
      degree: "Master of Computer Applications (MCA) - AI & ML Specialization",
      institution: "SRM University Chennai",
      duration: "2023 – 2025",
      location: "India",
      details: [
        "Specialized in Artificial Intelligence & Machine Learning.",
        "Developed ML-based projects, implementing predictive analytics.",
        "Worked on cloud computing and big data processing.",
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University",
      duration: "2020 – 2023",
      location: "India",
      details: [
        "Learned core computer science concepts including DSA, OOP, and Web Development.",
        "Worked on multiple web-based applications using .NET and Angular.",
        "Built a mini-project on full-stack development as part of the final year.",
      ]
    }
  ];
}
