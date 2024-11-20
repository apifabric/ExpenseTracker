import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RECEIPT_MODULE_DECLARATIONS, ReceiptRoutingModule} from  './Receipt-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ReceiptRoutingModule
  ],
  declarations: RECEIPT_MODULE_DECLARATIONS,
  exports: RECEIPT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReceiptModule { }