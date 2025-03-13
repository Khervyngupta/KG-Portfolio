import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; 
import emailjs from '@emailjs/browser';
// import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatSnackBarModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  isSubmitting = false; 

  constructor(private snackBar: MatSnackBar) {}

  sendMessage(event: Event) {
    event.preventDefault();

    // const serviceID = environment.emailServiceID; 
    // const templateID = environment.emailTemplateID
    // const publicKey = environment.emailPublicKey;

    const serviceID = 'service_xnlnsnp'; 
    const templateID = 'template_ds22czc';
    const publicKey = '0xeLApnxtQl8YMqKS';

    const templateParams = {
      from_name: this.contact.name,
      from_email: 'khervyngupta@gmail.com',
      to_email: this.contact.email,
      message: this.contact.message
    };

    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      this.showSnackbar("⚠️ Please fill in all fields before submitting!", "error");
      return; 
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        this.isSubmitting = true;
        this.showSnackbar("✅ Message sent successfully!", "success");
        // console.log('Email sent!', response.status, response.text);
        // alert("Thank you for reaching out! I'll get back to you soon.");
        this.contact = { name: '', email: '', message: '' }; 
        this.isSubmitting = false;
      })
      .catch(error => {
        console.error('Error sending email:', error);
        // alert("Oops! Something went wrong. Please try again later.");
        this.showSnackbar("❌ Failed to send. Try again!", "error");
        this.isSubmitting = false;
      });

    // console.log("Message Sent:", this.contact);
    // alert("Thank you for reaching out! I'll get back to you soon.");
  }
  private showSnackbar(message: string, type: "success" | "error") {
    this.snackBar.open(message, "Close", {
      duration: 3000, // ✅ Auto-close in 3 seconds
      panelClass: type === "success" ? "success-snackbar" : "error-snackbar"
    });
  }
}
