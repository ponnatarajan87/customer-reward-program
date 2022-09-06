# Retailer App (Frontend)

### Description
A program to calculate the reward points earned for each customer per month and total based on their 3 months transactions (reading sample transactions from resources path). The frontend logic is developed using Angular along with UI components of PrimeNG.

#### Dataset in a table format that shows the customer list, transaction list, monthly total per customer, and 3 months summary

Step 1 :- When the page is initialized, calling the backend api http://localhost:8080/retailer-app/api/getAllTransactions
to fetch all transactions along with the reward points calculated for each transactions.

Step 2 :- Bind the details received from the above response with Customer List and Transaction List tables.

![image](https://user-images.githubusercontent.com/112087209/187033458-88bff196-31c3-4627-bbea-c98a42ed607b.png)

Step 3 :- Iterate the response data and calculate the month-wise reward points for each customer and summary of it.

![image](https://user-images.githubusercontent.com/112087209/187033519-39fc5a87-7f53-478d-9bb0-1622cd8cc94d.png)
