import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Policy-card.component.html',
  styleUrls: ['./Policy-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Policy-card]': 'true'
  }
})

export class PolicyCardComponent {


}