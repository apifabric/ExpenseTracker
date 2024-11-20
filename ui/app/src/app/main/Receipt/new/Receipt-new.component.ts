import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Receipt-new',
  templateUrl: './Receipt-new.component.html',
  styleUrls: ['./Receipt-new.component.scss']
})
export class ReceiptNewComponent {
  @ViewChild("ReceiptForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}