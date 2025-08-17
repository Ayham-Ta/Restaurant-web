import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import '@fortawesome/fontawesome-free/css/all.css';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [NgFor], // Add this

})
export class Header implements OnInit {
    ngOnInit() {
    register(); // Required for Swiper web components
  }
 swiperConfig: SwiperOptions = {
    slidesPerView: 3,
      autoplay: {
    delay: 4000,        // 4 second delay
    disableOnInteraction: false, // Continue after user interaction
    pauseOnMouseEnter: false     // Don't pause on hover
  },
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  };
  items = [
    { title: 'Item 1', description: 'hello' },
    { title: 'Item 2', description: '1' },
    { title: 'Item 3', description: '2' },
    { title: 'Item 4', description: '3' },
    { title: 'Item 5', description: '4' }
  ];
}