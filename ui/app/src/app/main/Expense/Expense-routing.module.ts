import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseHomeComponent } from './home/Expense-home.component';
import { ExpenseNewComponent } from './new/Expense-new.component';
import { ExpenseDetailComponent } from './detail/Expense-detail.component';

const routes: Routes = [
  {path: '', component: ExpenseHomeComponent},
  { path: 'new', component: ExpenseNewComponent },
  { path: ':id', component: ExpenseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Expense-detail-permissions'
      }
    }
  },{
    path: ':expense_id/Invoice', loadChildren: () => import('../Invoice/Invoice.module').then(m => m.InvoiceModule),
    data: {
        oPermission: {
            permissionId: 'Invoice-detail-permissions'
        }
    }
},{
    path: ':expense_id/Receipt', loadChildren: () => import('../Receipt/Receipt.module').then(m => m.ReceiptModule),
    data: {
        oPermission: {
            permissionId: 'Receipt-detail-permissions'
        }
    }
}
];

export const EXPENSE_MODULE_DECLARATIONS = [
    ExpenseHomeComponent,
    ExpenseNewComponent,
    ExpenseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }