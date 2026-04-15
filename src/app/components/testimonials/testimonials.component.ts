import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  currentIndex = 0;

  testimonials = [
    {
      name: 'U Ye Yint Htoo',
      role: 'Residential Client',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'ERA LINK built our two-storeyed RCC building with exceptional quality. Their systematic construction techniques and professional workers delivered exactly what we envisioned.',
      rating: 5
    },
    {
      name: 'U Htet Ko Ko Aung',
      role: 'Commercial Client',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      text: 'The consultant services from ERA LINK were outstanding. Their experienced engineers supervised every step of our three-storeyed building project with great attention to detail.',
      rating: 5
    },
    {
      name: 'Sagaing Region Development Affairs',
      role: 'Government Organization',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      text: 'ERA LINK has been a trusted partner on multiple projects including steel structure buildings and concrete road construction. Their quality and reliability are exceptional.',
      rating: 5
    },
  ];

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
