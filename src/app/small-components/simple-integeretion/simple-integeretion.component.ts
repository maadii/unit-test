import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-integeretion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-integeretion.component.html',
  styleUrl: './simple-integeretion.component.css'
})
export class SimpleIntegeretionComponent {
  total: number = 0;

  increment(): void {
    this.total += 1;
  }

  decrement(): void {
    if (this.total > 0) {
      this.total -= 1;
    }
  }
}
