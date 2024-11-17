import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offcanvas } from 'bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'babyShowerAngelaPaola';

  day: boolean = true;
  eventDate: Date = new Date('2024-12-01T14:00:00'); // Aquí pones la fecha del evento
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.eventDate.getTime() - now;

      if (distance <= 0) {
        this.day=false;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000); // Actualiza cada segundo
  }


}
