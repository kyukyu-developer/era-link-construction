import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {

  stats = [
    { value: 20, suffix: '+', label: 'Projects Completed', icon: 'fas fa-building' },
    { value: 50, suffix: '+', label: 'Expert Workers',     icon: 'fas fa-users'    },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'fas fa-star'   },
  ];

  features = [
    { icon: 'fas fa-dollar-sign',  title: 'Cost Effective',        description: 'Competitive pricing without compromising quality' },
    { icon: 'fas fa-pencil-ruler', title: 'Innovative Design',      description: 'Creative and modern architectural solutions' },
    { icon: 'fas fa-hard-hat',     title: 'Systematic Construction', description: 'Precise and systematic construction techniques' },
    { icon: 'fas fa-search',       title: 'Quality Supervision',    description: 'Thorough quality inspection at every stage' },
    { icon: 'fas fa-tasks',        title: 'Project Management',     description: 'Strong and reliable project management' },
    { icon: 'fas fa-users',        title: 'Professional Workers',   description: 'Skilled and experienced workforce' },
    { icon: 'fas fa-check-circle', title: 'Quality Assurance',      description: 'Guaranteed quality in every project' },
    { icon: 'fas fa-thumbs-up',    title: '100% Satisfaction',      description: 'Complete client satisfaction guaranteed' },
  ];

  ngAfterViewInit() {
    const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
  }

  private animateCounter(el: HTMLElement) {
    const target = parseInt(el.dataset['target'] ?? '0');
    const suffix = el.dataset['suffix'] ?? '';
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
