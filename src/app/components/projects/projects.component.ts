import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeFilter = 'all';
  selectedProject: any = null;
  lightboxPhoto: string | null = null;
  lightboxIndex: number = 0;

  filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'tender', label: 'Tender' },
    { key: 'collaborative', label: 'Collaborative' },
    { key: 'residential', label: 'Residential' },
    { key: 'consultant', label: 'Consultant' },
  ];

  projects = projectsData;

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(key: string) {
    this.activeFilter = key;
  }

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    this.lightboxPhoto = null;
    document.body.style.overflow = '';
  }

  openLightbox(photo: string, index: number) {
    this.lightboxPhoto = photo;
    this.lightboxIndex = index;
  }

  closeLightbox() {
    this.lightboxPhoto = null;
  }

  prevPhoto() {
    const photos: string[] = this.selectedProject?.photos ?? [];
    if (!photos.length) return;
    this.lightboxIndex = (this.lightboxIndex - 1 + photos.length) % photos.length;
    this.lightboxPhoto = photos[this.lightboxIndex];
  }

  nextPhoto() {
    const photos: string[] = this.selectedProject?.photos ?? [];
    if (!photos.length) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % photos.length;
    this.lightboxPhoto = photos[this.lightboxIndex];
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.lightboxPhoto) {
      this.closeLightbox();
    } else if (this.selectedProject) {
      this.closeProject();
    }
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() {
    if (this.lightboxPhoto) this.prevPhoto();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight() {
    if (this.lightboxPhoto) this.nextPhoto();
  }
}
