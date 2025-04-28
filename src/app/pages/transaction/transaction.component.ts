import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transactions = [
    { id: 1, date: '2025-04-25', amount: 5000, category: 'Food', status: 'Completed' },
    { id: 2, date: '2025-04-26', amount: 2000, category: 'Travel', status: 'Pending' }
  ];

  filteredTransactions = [...this.transactions];

  totalIncome = 5000;
  totalExpenses = 2000;
  netBalance = 3000;

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredTransactions = this.transactions.filter(txn =>
      txn.category.toLowerCase().includes(searchTerm)
    );
  }

  onDateFilter(event: any) {
    const selectedDate = event.target.value;
    this.filteredTransactions = this.transactions.filter(txn =>
      txn.date === selectedDate
    );
  }

  openAddTransaction() {
    // logic to open add transaction modal
    console.log('Add Transaction Clicked');
  }

  viewTransaction(txn: any) {
    // logic to view transaction
    console.log('View Transaction:', txn);
  }

  editTransaction(txn: any) {
    // logic to edit transaction
    console.log('Edit Transaction:', txn);
  }

  deleteTransaction(id: number) {
    // logic to delete transaction
    console.log('Delete Transaction ID:', id);
  }

  exportPDF() {
    // logic to export as PDF
    console.log('Export as PDF');
  }

  exportExcel() {
    // logic to export as Excel
    console.log('Export as Excel');
  }
}
