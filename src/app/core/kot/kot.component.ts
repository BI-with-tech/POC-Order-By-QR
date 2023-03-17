import { Component } from '@angular/core';
import { StorageUtilities } from '../utilities/storageUtilities';

@Component({
  selector: 'app-kot',
  templateUrl: './kot.component.html',
  styleUrls: ['./kot.component.css']
})
export class KotComponent {
  newOrdersPerspective: boolean = true;
  preparingPerspective: boolean = false;
  completedPerspective: boolean = false;

  allOrders: any;
  newOrders: any;
  preparingOrders: any;
  completedOrders: any;

  openNewOrderPerspective(){
    console.log("New Order Perspective");
    this.newOrdersPerspective = true;
    this.preparingPerspective = false;
    this.completedPerspective = false;
  }

  openPreparingPerspective(){
    console.log("Preparing Perspective");
    this.newOrdersPerspective = false;
    this.preparingPerspective = true;
    this.completedPerspective = false;
  }

  openCompletedPerspective(){
    console.log("Completed Perspective");
    this.newOrdersPerspective = false;
    this.preparingPerspective = false;
    this.completedPerspective = true;
  }


  ngOnInit(){
    this.refreshOrders();
  }

  refreshOrders(){
    this.allOrders = [];
    for(let order of JSON.parse(StorageUtilities.getAllOrders)){
      this.allOrders.push(new Map(JSON.parse(order)));
    }
    this.newOrders = this.allOrders.filter((order) => {
      return order.get("orderStatus") == "New";
    });
    this.preparingOrders = this.allOrders.filter((order) => {
      return order.get("orderStatus") == "Preparing";
    });
    this.completedOrders = this.allOrders.filter((order) => {
      return order.get("orderStatus") == "Completed";
    });
    console.log(this.newOrders);
    console.log(this.preparingOrders);
    console.log(this.completedOrders);
  }

}
