import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-drafting-compass',
      title: 'Design',
      description: 'Comprehensive architectural and structural drawings crafted by experienced engineers.',
      features: ['Architectural Drawings', 'Structural Drawings', 'Detail Estimate']
    },
    {
      icon: 'fas fa-building',
      title: 'Construction',
      description: 'Full-scale construction services from foundation to finishing with systematic techniques.',
      features: ['RCC Buildings', 'Steel Structures', 'Infrastructure']
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Consultant Service',
      description: 'Expert consultation, supervision, and quality inspection throughout your project.',
      features: ['Site Supervision', 'Quality Inspection', 'Project Management']
    },
    {
      icon: 'fas fa-tools',
      title: 'Renovation',
      description: 'Transforming and upgrading existing structures with modern solutions and improvements.',
      features: ['Structural Upgrades', 'Interior Remodeling', 'Restoration']
    },
  ];
}
