import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import emailjs from '@emailjs/browser';

// Replace these with your EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  isSending = false;
  isSuccess = false;
  isError = false;

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Us', lines: ['Lane (18), Bayintnaung Street', 'Chan Mya Wati Ward, Monywa Township', 'Sagaing Region'] },
    { icon: 'fas fa-phone-alt', title: 'Call Us', lines: ['09-456 646 645, 09-952 250 003', '09-956 646 625, 09-955 777 013'] },
    { icon: 'fas fa-envelope', title: 'Email Us', lines: ['eralinkconstruction@gmail.com'] },
    { icon: 'fas fa-clock', title: 'Working Hours', lines: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'] },
  ];

  onSubmit() {
    this.isSending = true;
    this.isSuccess = false;
    this.isError = false;

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        phone: this.formData.phone,
        service: this.formData.service,
        message: this.formData.message,
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.isSending = false;
      this.isSuccess = true;
      this.formData = { name: '', email: '', phone: '', service: '', message: '' };
    }).catch(() => {
      this.isSending = false;
      this.isError = true;
    });
  }
}
