import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  getProjects() {
    return [
      { title: 'Project 1', description: 'Description of project 1' },
      { title: 'Project 2', description: 'Description of project 2' }
    ];
  }

  getExperience() {
    return [
      { company: 'Company A', role: 'Software Engineer', duration: '2023-2024' },
      { company: 'Company B', role: 'Developer', duration: '2022-2023' }
    ];
  }

  getSkills() {
    return ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'SQL', 'MongoDB'];
  }  
}