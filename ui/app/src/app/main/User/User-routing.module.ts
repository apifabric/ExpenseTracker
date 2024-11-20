import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Approver', loadChildren: () => import('../Approver/Approver.module').then(m => m.ApproverModule),
    data: {
        oPermission: {
            permissionId: 'Approver-detail-permissions'
        }
    }
},{
    path: ':manager_id/Department', loadChildren: () => import('../Department/Department.module').then(m => m.DepartmentModule),
    data: {
        oPermission: {
            permissionId: 'Department-detail-permissions'
        }
    }
},{
    path: ':user_id/Expense', loadChildren: () => import('../Expense/Expense.module').then(m => m.ExpenseModule),
    data: {
        oPermission: {
            permissionId: 'Expense-detail-permissions'
        }
    }
},{
    path: ':user_id/ExpenseReport', loadChildren: () => import('../ExpenseReport/ExpenseReport.module').then(m => m.ExpenseReportModule),
    data: {
        oPermission: {
            permissionId: 'ExpenseReport-detail-permissions'
        }
    }
},{
    path: ':user_id/PaymentMethod', loadChildren: () => import('../PaymentMethod/PaymentMethod.module').then(m => m.PaymentMethodModule),
    data: {
        oPermission: {
            permissionId: 'PaymentMethod-detail-permissions'
        }
    }
},{
    path: ':user_id/Policy', loadChildren: () => import('../Policy/Policy.module').then(m => m.PolicyModule),
    data: {
        oPermission: {
            permissionId: 'Policy-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }