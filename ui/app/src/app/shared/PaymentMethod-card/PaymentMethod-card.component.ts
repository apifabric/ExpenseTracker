import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PaymentMethod-card.component.html',
  styleUrls: ['./PaymentMethod-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PaymentMethod-card]': 'true'
  }
})

export class PaymentMethodCardComponent {


}