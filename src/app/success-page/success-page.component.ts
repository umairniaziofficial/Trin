import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss'
})
export class SuccessPageComponent implements OnInit {
  ngOnInit() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ['#00ff00', '#26ff00', '#4dff00', '#73ff00', '#99ff00'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}
