import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrls: ['./expenseform.component.scss']
})
export class ExpenseformComponent implements OnInit {

  balance: number = 3930;  
  income: number = 5000;
  expense: string = "Rent";
  amount: number = 900;

  constructor() { }

  ngOnInit() {
  }

  addItem(){

  }

}
