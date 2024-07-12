import { Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [

    {path: "", component: TransactionsComponent},
    {path:"details/:id", loadComponent: () => import('./transaction-details/transaction-details.component').then(m => m.TransactionDetailsComponent)}
];
