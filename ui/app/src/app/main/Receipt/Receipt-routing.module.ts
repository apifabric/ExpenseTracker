import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptHomeComponent } from './home/Receipt-home.component';
import { ReceiptNewComponent } from './new/Receipt-new.component';
import { ReceiptDetailComponent } from './detail/Receipt-detail.component';

const routes: Routes = [
  {path: '', component: ReceiptHomeComponent},
  { path: 'new', component: ReceiptNewComponent },
  { path: ':id', component: ReceiptDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Receipt-detail-permissions'
      }
    }
  }
];

export const RECEIPT_MODULE_DECLARATIONS = [
    ReceiptHomeComponent,
    ReceiptNewComponent,
    ReceiptDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }