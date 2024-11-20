import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PaymentMethod-new',
  templateUrl: './PaymentMethod-new.component.html',
  styleUrls: ['./PaymentMethod-new.component.scss']
})
export class PaymentMethodNewComponent {
  @ViewChild("PaymentMethodForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}