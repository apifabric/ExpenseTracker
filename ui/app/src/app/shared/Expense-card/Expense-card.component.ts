import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Expense-card.component.html',
  styleUrls: ['./Expense-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Expense-card]': 'true'
  }
})

export class ExpenseCardComponent {


}