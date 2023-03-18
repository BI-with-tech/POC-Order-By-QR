import { Component } from '@angular/core';
import { StorageUtilities } from '../../utilities/storageUtilities';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
  allOrders: any;
  orderDetails: any;
  tableNumber: any;
  customerName: any;
  orderStatus: any;
  newOrderFlag: boolean = false;
  preparingOrderFlag: boolean = false;
  completedOrderFlag: boolean = false;

  ngOnInit(){
    this.tableNumber = StorageUtilities.getTableNumber;
    this.customerName = StorageUtilities.getCustomerName;
    this.refreshOrderStatus(this.tableNumber);
    this.orderDetails =  new Map(JSON.parse(StorageUtilities.getOrderDetails));
  //   setTimeout(function(){
  //     this.refreshOrderStatus(this.tableNumber);
  //  }, 5000);
  }

  refreshOrderStatus(tableNumber: string){
    this.allOrders = [];
    for(let order of JSON.parse(StorageUtilities.getAllOrders)){
      this.allOrders.push(new Map(JSON.parse(order)));
    }
    this.orderDetails = this.allOrders.filter((order) => {
      return order.get("tableNumber") == tableNumber;
    })[0];
    console.log(this.orderDetails);
    this.orderStatus = this.orderDetails.get('orderStatus');
    this.newOrderFlag = false;
    this.preparingOrderFlag = false;
    this.completedOrderFlag = false;
    switch(this.orderStatus){
      case "New":
        this.newOrderFlag = true;
        break;
      case "Preparing":
          this.preparingOrderFlag = true;
          break;
      case "Completed":
          this.completedOrderFlag = true;
          break;
    }
    console.log(this.orderStatus);
  }
}
