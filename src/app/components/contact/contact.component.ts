import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

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

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Us', lines: ['Lane (18), Bayintnaung Street', 'Chan Mya Wati Ward, Monywa Township', 'Sagaing Region'] },
    { icon: 'fas fa-phone-alt', title: 'Call Us', lines: ['09-456 646 645, 09-952 250 003', '09-956 646 625, 09-955 777 013'] },
    { icon: 'fas fa-envelope', title: 'Email Us', lines: ['eralinkconstruction@gmail.com'] },
    { icon: 'fas fa-clock', title: 'Working Hours', lines: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'] },
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
