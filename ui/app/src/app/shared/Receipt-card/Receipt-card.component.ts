import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Receipt-card.component.html',
  styleUrls: ['./Receipt-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Receipt-card]': 'true'
  }
})

export class ReceiptCardComponent {


}