import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}
  public transactionsSubject = new Subject<string>();
  formatDate(date: Date){
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
  }
  getTransactions(startDate: Date, endDate: Date) : Observable<any[]>{
   
    return this.http.get(`http://localhost:3000/api/transaction/?startDate=${this.formatDate(startDate)}&endDate=${this.formatDate(endDate)}`) as Observable<any[]>
    //return of(this.transactions);
  }
  updateTransaction(transaction: any) {
    this.transactionsSubject.next('changes');
    return this.http.put('http://localhost:3000/api/transaction/', transaction)
  }
}
