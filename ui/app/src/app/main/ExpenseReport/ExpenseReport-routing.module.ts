import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseReportHomeComponent } from './home/ExpenseReport-home.component';
import { ExpenseReportNewComponent } from './new/ExpenseReport-new.component';
import { ExpenseReportDetailComponent } from './detail/ExpenseReport-detail.component';

const routes: Routes = [
  {path: '', component: ExpenseReportHomeComponent},
  { path: 'new', component: ExpenseReportNewComponent },
  { path: ':id', component: ExpenseReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ExpenseReport-detail-permissions'
      }
    }
  },{
    path: ':expense_report_id/Approver', loadChildren: () => import('../Approver/Approver.module').then(m => m.ApproverModule),
    data: {
        oPermission: {
            permissionId: 'Approver-detail-permissions'
        }
    }
}
];

export const EXPENSEREPORT_MODULE_DECLARATIONS = [
    ExpenseReportHomeComponent,
    ExpenseReportNewComponent,
    ExpenseReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseReportRoutingModule { }