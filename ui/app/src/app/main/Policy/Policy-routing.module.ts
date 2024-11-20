import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyHomeComponent } from './home/Policy-home.component';
import { PolicyNewComponent } from './new/Policy-new.component';
import { PolicyDetailComponent } from './detail/Policy-detail.component';

const routes: Routes = [
  {path: '', component: PolicyHomeComponent},
  { path: 'new', component: PolicyNewComponent },
  { path: ':id', component: PolicyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Policy-detail-permissions'
      }
    }
  }
];

export const POLICY_MODULE_DECLARATIONS = [
    PolicyHomeComponent,
    PolicyNewComponent,
    PolicyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }