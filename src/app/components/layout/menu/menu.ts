import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- import this
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  submenu?: { label: string, link: string }[];
  active?: boolean;
}
@Component({
  selector: 'app-menu',
  imports: [RouterModule , CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
 @ViewChild('navContainer', { static: false }) navContainer!: ElementRef<HTMLDivElement>;

  menuItems: MenuItem[] = [
    { label: 'Women', submenu: [{ label: 'New In', link: '/women/new' }, { label: 'Clothing', link: '/women/clothing' }] },
    { label: 'Men', submenu: [{ label: 'New In', link: '/men/new' }] },
    { label: 'Kids' },
    { label: 'Home' },
    { label: 'Sale' },
    { label: 'Accessories' },
    { label: 'Beauty' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },
    { label: 'Shoes' },

  ];

  toggleDropdown(event: Event, item: MenuItem) {
    event.preventDefault();
    item.active = !item.active;
  }

  scrollNav(distance: number) {
    if (this.navContainer) {
      this.navContainer.nativeElement.scrollBy({ left: distance, behavior: 'smooth' });
    }
  }
    images = [
    {
      url: 'assets/slider1.png',
      title: 'Carefully made upholstery from the best materials',
      subtitle: 'We offer a variety of furniture'
    },
    {
      url: 'assets/slider2.png',
      title: 'Modern style and perfect finish',
      subtitle: 'Explore our new collection'
    },
    {
      url: 'assets/slider3.png',
      title: 'Comfort and elegance combined',
      subtitle: 'Your home, your rules'
    },
    {
      url: 'assets/slider1.png',
      title: 'Furnish your dreams with us',
      subtitle: 'Affordable luxury'
    }
  ];
 
  currentIndex = 0;
  intervalId: any;
 
  ngOnInit() {
    this.startAutoSlide();
  }
 
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
 
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); //كل تلت ثواني
  }
 
  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.intervalId);  // أوقف التشغيل التلقائي مؤقتًا عند الضغط
    this.startAutoSlide();          // ثم أعد تشغيله
  }
 
 
  prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  clearInterval(this.intervalId);
  this.startAutoSlide();
}
 
nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  clearInterval(this.intervalId);
  this.startAutoSlide();
}
 

}
