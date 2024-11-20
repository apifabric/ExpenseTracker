import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Approver', loadChildren: () => import('./Approver/Approver.module').then(m => m.ApproverModule) },
    
        { path: 'Budget', loadChildren: () => import('./Budget/Budget.module').then(m => m.BudgetModule) },
    
        { path: 'Category', loadChildren: () => import('./Category/Category.module').then(m => m.CategoryModule) },
    
        { path: 'Department', loadChildren: () => import('./Department/Department.module').then(m => m.DepartmentModule) },
    
        { path: 'Expense', loadChildren: () => import('./Expense/Expense.module').then(m => m.ExpenseModule) },
    
        { path: 'ExpenseReport', loadChildren: () => import('./ExpenseReport/ExpenseReport.module').then(m => m.ExpenseReportModule) },
    
        { path: 'Invoice', loadChildren: () => import('./Invoice/Invoice.module').then(m => m.InvoiceModule) },
    
        { path: 'PaymentMethod', loadChildren: () => import('./PaymentMethod/PaymentMethod.module').then(m => m.PaymentMethodModule) },
    
        { path: 'Policy', loadChildren: () => import('./Policy/Policy.module').then(m => m.PolicyModule) },
    
        { path: 'Receipt', loadChildren: () => import('./Receipt/Receipt.module').then(m => m.ReceiptModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'Vendor', loadChildren: () => import('./Vendor/Vendor.module').then(m => m.VendorModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }