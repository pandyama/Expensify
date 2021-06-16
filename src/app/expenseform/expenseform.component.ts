import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray  } from '@angular/forms';


/**
 * Useful links
 *  - https://blog.angular-university.io/angular-form-array/
 */


@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrls: ['./expenseform.component.scss']
})
export class ExpenseformComponent implements OnInit {

  expenseForm: FormGroup;

  balance: number = 3930;  
  income: number = 5000;
  expense: string = "Rent";
  amount: number = 900;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      items2: this.fb.array([])
    })
   }

   get items(): FormArray{
     return this.expenseForm.controls['items2'] as FormArray;
   }

   newItem(): FormGroup{
     return this.fb.group({
       itemName: '',
       itemAmount: ''
     });
   }

   removeDevice(i: number) {
    this.items.removeAt(i);
  }

   addItem(){
     this.items.push(this.newItem());
     console.log(this.expenseForm.controls['items2']);
   }

  ngOnInit() {
    this.items.push(this.newItem());
  }

  submit(){
    console.log(this.expenseForm.value);
  }

}
