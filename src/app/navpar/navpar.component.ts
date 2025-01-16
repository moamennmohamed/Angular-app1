import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,NgStyle],
  templateUrl: './navpar.component.html',
  styleUrl: './navpar.component.css'
})
export class NavbarComponent {

  navbarHeight: string = '100px';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 50) {

      this.navbarHeight = '70px';
    } else {

      this.navbarHeight = '100px';
    }

    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (navbar) {
      this.renderer.setStyle(navbar, 'height', this.navbarHeight);
      this.renderer.setStyle(navbar, 'transition', 'height 0.3s ease');
    }
  }

}
