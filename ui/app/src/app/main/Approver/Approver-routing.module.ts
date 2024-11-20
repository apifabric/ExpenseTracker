import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproverHomeComponent } from './home/Approver-home.component';
import { ApproverNewComponent } from './new/Approver-new.component';
import { ApproverDetailComponent } from './detail/Approver-detail.component';

const routes: Routes = [
  {path: '', component: ApproverHomeComponent},
  { path: 'new', component: ApproverNewComponent },
  { path: ':id', component: ApproverDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Approver-detail-permissions'
      }
    }
  }
];

export const APPROVER_MODULE_DECLARATIONS = [
    ApproverHomeComponent,
    ApproverNewComponent,
    ApproverDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproverRoutingModule { }