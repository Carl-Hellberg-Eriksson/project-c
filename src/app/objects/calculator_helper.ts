export class CalculatorHelper {
  hours: number
  hourlyWage: number

  constructor(hours: number, hourlyWage: number) {
    this.hours = hours;
    this.hourlyWage = hourlyWage;
  }
  
  totalIncome () {
    return this.hourlyWage * this.hours;
  } 
}