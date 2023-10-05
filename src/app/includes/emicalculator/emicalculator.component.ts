import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent {

  loanAmount: number = 0;
  tenure: number = 0;
  interest: number = 0;
  emi: number = 0;
  cal() {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100) * this.tenure);
    this.emi = outstandingAmount / this.tenure;
  }

}
