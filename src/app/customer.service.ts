import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private getCustomerRewardPointsUrl = environment.baseUrl + '/getCustomerRewardPoints/';

  constructor(private httpClient: HttpClient) { }

  getCustomerRewardPoints(customerName: string): Observable<any> {
    return this.httpClient.get(this.getCustomerRewardPointsUrl + customerName);
  }
}
