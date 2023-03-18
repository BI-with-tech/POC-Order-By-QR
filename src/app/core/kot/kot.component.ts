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
  nosNewOrders: number;
  nosPreparingOrders: number;
  nosCompletedOrders: number;

  openNewOrderPerspective(){
    this.newOrdersPerspective = true;
    this.preparingPerspective = false;
    this.completedPerspective = false;
  }

  openPreparingPerspective(){
    this.newOrdersPerspective = false;
    this.preparingPerspective = true;
    this.completedPerspective = false;
  }

  openCompletedPerspective(){
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

    this.nosNewOrders = this.newOrders.length;
    this.nosPreparingOrders = this.preparingOrders.length;
    this.nosCompletedOrders = this.completedOrders.length;
  }

  onChangeOrderStateEvent(chageOrderObj: string){
    this.changeOrderStatus(chageOrderObj['orderTime'], chageOrderObj['newStatus']);
    this.refreshOrders();
  }
  
  changeOrderStatus(orderTime: string, newStatus: string){
    console.log(orderTime);
    console.log(this.allOrders);
    this.allOrders.filter((order) => {
      return order.get("orderTime") == orderTime;
    }).map((order) =>{
      order.set("orderStatus", newStatus);
    });
    console.log(this.allOrders);

    var existingOrders = [];
    for(let order of this.allOrders){
      existingOrders.push(JSON.stringify(Array.from(order.entries())));
    }
    StorageUtilities.setAllOrders = JSON.stringify(existingOrders);
  }
}
