import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ExpenseReport-card.component.html',
  styleUrls: ['./ExpenseReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ExpenseReport-card]': 'true'
  }
})

export class ExpenseReportCardComponent {


}