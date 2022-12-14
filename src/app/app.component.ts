import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { CustomerTransaction } from './customerTransaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customer-reward-program';
  customers: string[] = [];
  customerTransactions: CustomerTransaction[] = [];
  resultMap: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();
  customerTotalRewardPoints: Map<string, number> = new Map<string, number>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllTransactions().subscribe(
      (customerTransactions: CustomerTransaction[]) => {
        this.customerTransactions = customerTransactions;

        for (const customerTransaction of this.customerTransactions) {
          let customerName = customerTransaction.customerName;
          let month = customerTransaction.transactionDate.split('/')[1];
          let rewardPoints = customerTransaction.rewardPoints;
          const monthRewardPointsMap: Map<string, number> = new Map<string, number>();

          if (!this.resultMap.has(customerName)) {
            this.resultMap.set(customerName, monthRewardPointsMap.set(month, rewardPoints));
            this.customerTotalRewardPoints.set(customerName, rewardPoints);
          } else {
            if (!this.resultMap.get(customerName)?.has(month)) {
              this.resultMap.get(customerName)?.set(month, rewardPoints);
            } else {
              this.resultMap.get(customerName)?.set(month, (this.resultMap.get(customerName)?.get(month) || 0) + rewardPoints);
            }

            this.customerTotalRewardPoints.set(customerName, (this.customerTotalRewardPoints.get(customerName) || 0) + rewardPoints);
          }
        }
        for (const entry of this.resultMap.entries()) {
          this.customers.push(entry[0]);
        }
      }
    );
  }

  onRowSelect(event: any) {

  }

  onRowUnselect(event: any) {

  }
}
