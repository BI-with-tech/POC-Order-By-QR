import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {

  @Input() orderItem: any;
  @Input() orderNumber: any;
  ordersArray: any;

  ngOnInit(){
    console.log(this.orderItem);
    this.ordersArray = new Map(JSON.parse(this.orderItem.get('orderList')));
    console.log(this.ordersArray);
  }
}
