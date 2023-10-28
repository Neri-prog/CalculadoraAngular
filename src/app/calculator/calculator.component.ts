import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  displayValue: string = '';
  calculated: boolean = false;
  firstValue: string = ''; 
  operator: string = ''; 

  appendToDisplay(value: string) {
    if (this.calculated) {
      this.displayValue = ''; 
      this.calculated = false;
    }
    this.displayValue += value;
  }

  setOperator(op: string) {
    if (!this.calculated) {
      if (this.firstValue === '') {
        this.firstValue = this.displayValue;
      } else {
        this.calculate();
      }
      this.operator = op;
      this.displayValue = '';
    }
  }

  calculate() {
    if (this.firstValue && this.operator && this.displayValue) {
      switch (this.operator) {
        case '+':
          this.displayValue = (parseFloat(this.firstValue) + parseFloat(this.displayValue)).toString();
          break;
        case '-':
          this.displayValue = (parseFloat(this.firstValue) - parseFloat(this.displayValue)).toString();
          break;
        case '*':
          this.displayValue = (parseFloat(this.firstValue) * parseFloat(this.displayValue)).toString();
          break;
        case '/':
          if (parseFloat(this.displayValue) !== 0) {
            this.displayValue = (parseFloat(this.firstValue) / parseFloat(this.displayValue)).toString();
          } else {
            this.displayValue = 'Error';
          }
          break;
        default:
          break;
      }
      this.calculated = true;
      this.firstValue = '';
      this.operator = '';
    }
  }

  clearDisplay() {
    this.displayValue = '';
    this.calculated = false;
    this.firstValue = '';
    this.operator = '';
  }
}
