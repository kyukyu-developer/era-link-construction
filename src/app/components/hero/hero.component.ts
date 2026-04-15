import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  slides = [
    {
      image: 'banner-1.jpg',
      subtitle: 'Design & Construction',
      title: 'From Your Dream,\nBuilt to Shine in Every Era',
      description: 'ERA LINK delivers exceptional design and construction solutions with innovation, precision, and lasting quality.'
    },
    {
      image: 'banner-2.jpg',
      subtitle: 'Innovative Design',
      title: 'Transforming Visions\nInto Reality',
      description: 'From architectural drawings to construction, we bring your dreams to life with precision and craftsmanship.'
    },
    {
      image: 'banner-3.jpg',
      subtitle: 'A Company Worthy of Your Trust',
      title: 'Quality Built\nOn Trust',
      description: 'Systematic construction techniques, quality supervision, and 100% client satisfaction in every project.'
    }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
