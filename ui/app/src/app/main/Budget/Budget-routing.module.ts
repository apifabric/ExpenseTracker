import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetHomeComponent } from './home/Budget-home.component';
import { BudgetNewComponent } from './new/Budget-new.component';
import { BudgetDetailComponent } from './detail/Budget-detail.component';

const routes: Routes = [
  {path: '', component: BudgetHomeComponent},
  { path: 'new', component: BudgetNewComponent },
  { path: ':id', component: BudgetDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Budget-detail-permissions'
      }
    }
  }
];

export const BUDGET_MODULE_DECLARATIONS = [
    BudgetHomeComponent,
    BudgetNewComponent,
    BudgetDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }