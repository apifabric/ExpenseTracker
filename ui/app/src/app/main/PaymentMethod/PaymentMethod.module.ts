import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PAYMENTMETHOD_MODULE_DECLARATIONS, PaymentMethodRoutingModule} from  './PaymentMethod-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PaymentMethodRoutingModule
  ],
  declarations: PAYMENTMETHOD_MODULE_DECLARATIONS,
  exports: PAYMENTMETHOD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentMethodModule { }