import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import '@fortawesome/fontawesome-free/css/all.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;
  currentIndex = 0;
  
  // Sample menu items
  menuItems = [
    { name: 'Home', icon: 'fa-home' },
    { name: 'Menu', icon: 'fa-utensils' },
    { name: 'About', icon: 'fa-info-circle' },
    { name: 'Book Table', icon: 'fa-calendar-alt' }
  ];

  activeItem = this.menuItems[0].name;

  ngAfterViewInit() {
    this.initCarousel();
  }

  private initCarousel() {
    const carousel = this.carouselRef.nativeElement;
    // Carousel initialization code here
  }

  setActive(item: string) {
    this.activeItem = item;
  }
  orderonline(){
    console.log('111111');
    
  }
}