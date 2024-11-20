import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Approver-card.component.html',
  styleUrls: ['./Approver-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Approver-card]': 'true'
  }
})

export class ApproverCardComponent {


}