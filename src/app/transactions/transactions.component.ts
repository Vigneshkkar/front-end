import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [TransactionService],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  constructor(private transactionService: TransactionService){

  }
  displayedColumns: string[] = ['id', 'text'];
  dataSource = [
    { id: 1, text: "what" },
    { id: 2, text: "is" },
    { id: 3, text: "up" },
  ];

  dateDate = new Date();

}
