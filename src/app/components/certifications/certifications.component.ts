import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngFor
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications = [
    {
      name: "Microsoft Certified: .Net Framework",
      issuer: "Microsoft",
      year: "2024",
      link: "https://drive.google.com/file/d/1hBLO6brD0CcOdag1dQju2G-Sv8dGMjjZ/view?pli=1"
    },
    {
      name: "Introduction To Java",
      issuer: "Coding Ninjas",
      year: "2323",
      link: "https://certificate.codingninjas.com/view/f44df6a05a1a5464"
    },
    {
      name: "Data Structures In Java",
      issuer: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/53fd32d83ce5fb76"
    },
    {
      name: "React",
      issuer: "Coding Ninjas",
      year: "2023",
      link: "https://certificate.codingninjas.com/view/57cd64774cfa2ceb"
    },
    {
      name: "C#",
      issuer: "HackerRank",
      year: "2023",
      link: "https://www.hackerrank.com/certificates/41d54171afce"
    },
    {
      name: "Introduction to Networks",
      issuer: "Cisco CCNA",
      year: "2022",
      link: "https://www.credly.com/badges/1e005017-cbbf-4124-9f7e-45bc34b7b20c/linked_in_profile"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      link: "https://www.credly.com/aws-certification"
    },
    {
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023",
      link: "https://www.credential.net/google-cloud-certification"
    },
    {
      name: "Machine Learning with Python",
      issuer: "Coursera (IBM)",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments"
    }
  ];
}
