import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-credentials',
  imports: [ScrollAnimateDirective],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.scss'
})
export class CredentialsComponent {
  companyDetails = [
    { icon: 'fas fa-building', label: 'Company Name', value: 'ERA LINK COMPANY LIMITED' },
    { icon: 'fas fa-hashtag', label: 'Registration No.', value: '143261220' },
    { icon: 'fas fa-calendar-alt', label: 'Incorporated', value: '19 May, 2025' },
    { icon: 'fas fa-file-contract', label: 'Company Type', value: 'Private Company Limited by Shares' },
    { icon: 'fas fa-gavel', label: 'Governing Law', value: 'Myanmar Companies Law 2017' },
    { icon: 'fas fa-landmark', label: 'Registered By', value: 'DICA - Directorate of Investment and Company Administration' },
  ];
}
