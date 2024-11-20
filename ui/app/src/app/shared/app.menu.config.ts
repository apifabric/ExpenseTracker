import { MenuRootItem } from 'ontimize-web-ngx';

import { ApproverCardComponent } from './Approver-card/Approver-card.component';

import { BudgetCardComponent } from './Budget-card/Budget-card.component';

import { CategoryCardComponent } from './Category-card/Category-card.component';

import { DepartmentCardComponent } from './Department-card/Department-card.component';

import { ExpenseCardComponent } from './Expense-card/Expense-card.component';

import { ExpenseReportCardComponent } from './ExpenseReport-card/ExpenseReport-card.component';

import { InvoiceCardComponent } from './Invoice-card/Invoice-card.component';

import { PaymentMethodCardComponent } from './PaymentMethod-card/PaymentMethod-card.component';

import { PolicyCardComponent } from './Policy-card/Policy-card.component';

import { ReceiptCardComponent } from './Receipt-card/Receipt-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { VendorCardComponent } from './Vendor-card/Vendor-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Approver', name: 'APPROVER', icon: 'view_list', route: '/main/Approver' }
    
        ,{ id: 'Budget', name: 'BUDGET', icon: 'view_list', route: '/main/Budget' }
    
        ,{ id: 'Category', name: 'CATEGORY', icon: 'view_list', route: '/main/Category' }
    
        ,{ id: 'Department', name: 'DEPARTMENT', icon: 'view_list', route: '/main/Department' }
    
        ,{ id: 'Expense', name: 'EXPENSE', icon: 'view_list', route: '/main/Expense' }
    
        ,{ id: 'ExpenseReport', name: 'EXPENSEREPORT', icon: 'view_list', route: '/main/ExpenseReport' }
    
        ,{ id: 'Invoice', name: 'INVOICE', icon: 'view_list', route: '/main/Invoice' }
    
        ,{ id: 'PaymentMethod', name: 'PAYMENTMETHOD', icon: 'view_list', route: '/main/PaymentMethod' }
    
        ,{ id: 'Policy', name: 'POLICY', icon: 'view_list', route: '/main/Policy' }
    
        ,{ id: 'Receipt', name: 'RECEIPT', icon: 'view_list', route: '/main/Receipt' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'Vendor', name: 'VENDOR', icon: 'view_list', route: '/main/Vendor' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ApproverCardComponent

    ,BudgetCardComponent

    ,CategoryCardComponent

    ,DepartmentCardComponent

    ,ExpenseCardComponent

    ,ExpenseReportCardComponent

    ,InvoiceCardComponent

    ,PaymentMethodCardComponent

    ,PolicyCardComponent

    ,ReceiptCardComponent

    ,UserCardComponent

    ,VendorCardComponent

];