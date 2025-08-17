import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import '@fortawesome/fontawesome-free/css/all.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header{
  orderonline(){
    console.log('111111');
    
  }
}