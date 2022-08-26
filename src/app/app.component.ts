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
  customers: string[] = ["Justice Simpson", "Robin Willis", "Kerry Koch"];
  customerTransactions: CustomerTransaction[] = [];
  totalRewardPoints: number = 0;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {

  }

  onRowSelect(event: any) {
    this.customerService.getCustomerRewardPoints(event.data).subscribe(
      (customerTransactions: CustomerTransaction[]) => {
        this.customerTransactions = customerTransactions;

        let total = 0;
        for (const customerTransaction of this.customerTransactions) {
          total += customerTransaction.rewardPoints;
        }

        this.totalRewardPoints = total;
      }
    )
  }

  onRowUnselect(event: any) {

  }
}
