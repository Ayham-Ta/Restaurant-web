import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import '@fortawesome/fontawesome-free/css/all.css';
// import { SwiperOptions } from 'swiper/types';
// import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
interface SliderItem {
  title: string;
  description: string;
  buttonText: string;
  url: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [CommonModule], // Add this

})

export class Header implements OnInit {
    ngOnInit() {

      this.startAutoSlide();

  }
  slides: SliderItem[] = [
    {
      title: 'Explore our furniture collection',
      description: 'Carefully made upholstery from the best materials.',
      buttonText: 'Shop Now',
      url: 'https://example.com/shop'
    },
    {
      title: 'Modern style for your home',
      description: 'Perfect finish and contemporary designs.',
      buttonText: 'View Collection',
      url: 'https://example.com/modern'
    },
    {
      title: 'Comfort and elegance combined',
      description: 'Make your living space both cozy and stylish.',
      buttonText: 'Learn More',
      url: 'https://example.com/comfort'
    }
  ];

  currentIndex = 0;
  private intervalId?: number;
  private readonly slideInterval = 4000; // 4 seconds


  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.intervalId = window.setInterval(() => this.nextSlide(), this.slideInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  openUrl(url: string): void {
    window.open(url, '_blank');    
  }

  trackByIndex(index: number): number {
    return index;
  }
  HomeBtn(){
    console.log("home");
  }
  MenuBtn(){
    console.log("MenuBtn");
  }
  AboutBtn(){
    console.log("Aboutus");
  }
  BookTableBtn(){
    console.log("BookTableBtn");
  }
  Account(){
    console.log("Account");
  }
  Cart(){ 
    console.log("Cart");
  }
  Search(){
    console.log("Search");
  }
  OrderOnline(){
    console.log("OrderOnline");
  }
}