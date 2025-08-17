import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/layout/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/layout/footer/footer";
import { Background } from "./components/layout/background/background";

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer, Background],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Restaurant-web');
}
