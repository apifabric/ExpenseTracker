import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorHomeComponent } from './home/Vendor-home.component';
import { VendorNewComponent } from './new/Vendor-new.component';
import { VendorDetailComponent } from './detail/Vendor-detail.component';

const routes: Routes = [
  {path: '', component: VendorHomeComponent},
  { path: 'new', component: VendorNewComponent },
  { path: ':id', component: VendorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vendor-detail-permissions'
      }
    }
  }
];

export const VENDOR_MODULE_DECLARATIONS = [
    VendorHomeComponent,
    VendorNewComponent,
    VendorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }