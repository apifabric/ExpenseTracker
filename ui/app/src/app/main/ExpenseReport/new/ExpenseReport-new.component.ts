import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ExpenseReport-new',
  templateUrl: './ExpenseReport-new.component.html',
  styleUrls: ['./ExpenseReport-new.component.scss']
})
export class ExpenseReportNewComponent {
  @ViewChild("ExpenseReportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}