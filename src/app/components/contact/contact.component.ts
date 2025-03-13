import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage(event: Event) {
    event.preventDefault(); // Prevents page reload
    console.log("Message Sent:", this.contact);
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.contact = { name: '', email: '', message: '' }; // Reset form
  }
}
