import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EXPENSEREPORT_MODULE_DECLARATIONS, ExpenseReportRoutingModule} from  './ExpenseReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ExpenseReportRoutingModule
  ],
  declarations: EXPENSEREPORT_MODULE_DECLARATIONS,
  exports: EXPENSEREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpenseReportModule { }