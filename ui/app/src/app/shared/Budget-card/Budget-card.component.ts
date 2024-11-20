import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Budget-card.component.html',
  styleUrls: ['./Budget-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Budget-card]': 'true'
  }
})

export class BudgetCardComponent {


}