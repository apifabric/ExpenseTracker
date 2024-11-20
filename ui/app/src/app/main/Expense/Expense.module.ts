import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXPENSE_MODULE_DECLARATIONS, ExpenseRoutingModule} from  './Expense-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExpenseRoutingModule
  ],
  declarations: EXPENSE_MODULE_DECLARATIONS,
  exports: EXPENSE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseModule { }