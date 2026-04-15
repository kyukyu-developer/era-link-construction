import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-stats',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnDestroy {
  stats = [
    { icon: 'fas fa-building', value: 0, target: 20, suffix: '+', label: 'Projects Completed' },
    { icon: 'fas fa-smile', value: 0, target: 15, suffix: '+', label: 'Happy Clients' },
    { icon: 'fas fa-hard-hat', value: 0, target: 50, suffix: '+', label: 'Skilled Workers' },
    { icon: 'fas fa-user-tie', value: 0, target: 10, suffix: '+', label: 'Expert Engineers' },
  ];

  private animated = false;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    const section = document.querySelector('.stats');
    if (!section) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(section);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  private animateCounters() {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    this.stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.value = stat.target;
          clearInterval(timer);
        } else {
          stat.value = Math.floor(current);
        }
      }, interval);
    });
  }
}
