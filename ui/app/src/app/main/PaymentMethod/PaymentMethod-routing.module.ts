import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentMethodHomeComponent } from './home/PaymentMethod-home.component';
import { PaymentMethodNewComponent } from './new/PaymentMethod-new.component';
import { PaymentMethodDetailComponent } from './detail/PaymentMethod-detail.component';

const routes: Routes = [
  {path: '', component: PaymentMethodHomeComponent},
  { path: 'new', component: PaymentMethodNewComponent },
  { path: ':id', component: PaymentMethodDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PaymentMethod-detail-permissions'
      }
    }
  }
];

export const PAYMENTMETHOD_MODULE_DECLARATIONS = [
    PaymentMethodHomeComponent,
    PaymentMethodNewComponent,
    PaymentMethodDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodRoutingModule { }