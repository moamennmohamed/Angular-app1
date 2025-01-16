import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    '/Images/poert1.png',
    '/Images/port2.png',
    '/Images/port3.png',
    '/Images/poert1.png',
    '/Images/port2.png',
    '/Images/port3.png',
  ];

  currentImage: string = '';
}
