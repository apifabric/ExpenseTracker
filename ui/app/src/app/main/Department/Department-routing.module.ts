import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentHomeComponent } from './home/Department-home.component';
import { DepartmentNewComponent } from './new/Department-new.component';
import { DepartmentDetailComponent } from './detail/Department-detail.component';

const routes: Routes = [
  {path: '', component: DepartmentHomeComponent},
  { path: 'new', component: DepartmentNewComponent },
  { path: ':id', component: DepartmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Department-detail-permissions'
      }
    }
  },{
    path: ':department_id/Budget', loadChildren: () => import('../Budget/Budget.module').then(m => m.BudgetModule),
    data: {
        oPermission: {
            permissionId: 'Budget-detail-permissions'
        }
    }
}
];

export const DEPARTMENT_MODULE_DECLARATIONS = [
    DepartmentHomeComponent,
    DepartmentNewComponent,
    DepartmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }