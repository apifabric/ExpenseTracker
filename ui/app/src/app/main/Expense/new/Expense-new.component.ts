import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Expense-new',
  templateUrl: './Expense-new.component.html',
  styleUrls: ['./Expense-new.component.scss']
})
export class ExpenseNewComponent {
  @ViewChild("ExpenseForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}