import { Component } from '@angular/core';

@Component({
  selector: 'app-checkcibil',
  templateUrl: './checkcibil.component.html',
  styleUrls: ['./checkcibil.component.css']
})
export class CheckcibilComponent {
  cibilScore: number;
  cibilRating: string;

  constructor() { }

  generate() {
    this.cibilScore = Math.floor(Math.random() * (900 - 500 + 1)) + 500;
    if (this.cibilScore >= 800) {
      this.cibilRating = 'Best';
    } else if (this.cibilScore >= 700) {
      this.cibilRating = 'Better';
    } else {
      this.cibilRating = 'Good';
    }
  }

}
