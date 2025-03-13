import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngFor
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements = [
    {
      title: "Smart India Hackathon (SIH) 2023 Finalist",
      details: 
        [
          "Selected as a finalist in SIH 2023, solving real-world industry problems using AI and full-stack development.",
          "Led a finalist team in the Smart India Hackathon 2022, showcasing innovation and expertise in AI technology.",
          "Developed an AI-based Career Guidance Chatbot using React for the frontend and Python, including TensorFlow and ML techniques, for the backend."
        ],
          link: "https://drive.google.com/file/d/1HzG52XUycHaeP7nxOiI41fOr5vCFHmMs/view"
    },
    {
      title: "Top Performer in AI/ML Hackathon",
      details: 
        [
          "Achieved top rankings in an AI/ML hackathon, developing an innovative predictive analytics solution.",
        ],
        link: ""
    },
    {
      title: "Best Project Award - MCA Final Year",
      details: 
        [
          "Developed a cutting-edge AI-based chatbot that won the Best Project award in the MCA program.",
        ],
        link: ""
    },
    {
      title: "Open Source Contributor",
      details: 
        [
          "Contributed to multiple open-source projects, improving AI model efficiency and front-end performance.",
        ],
        link: "https://github.com/yourusername"
    }
  ];
}
