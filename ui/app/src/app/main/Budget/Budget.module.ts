import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUDGET_MODULE_DECLARATIONS, BudgetRoutingModule} from  './Budget-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BudgetRoutingModule
  ],
  declarations: BUDGET_MODULE_DECLARATIONS,
  exports: BUDGET_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BudgetModule { }