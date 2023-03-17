import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {

  @Input() orderItem: any;
  @Input() orderNumber: any;
  @Input() orderType: any;
  @Output() changeOrderStateEvent = new EventEmitter<{orderTime: string, newStatus: string}>();
  ordersArray: any;

  ngOnInit(){
    this.ordersArray = new Map(JSON.parse(this.orderItem.get('orderList')));
  }
  moveToNew(){
    this.changeOrderStateEvent.emit({orderTime: this.orderItem.get('orderTime'), newStatus: "New"});
  }
  moveToPreparing(){
    this.changeOrderStateEvent.emit({orderTime: this.orderItem.get('orderTime'), newStatus: "Preparing"});
  }
  moveToCompleted(){
    this.changeOrderStateEvent.emit({orderTime: this.orderItem.get('orderTime'), newStatus: "Completed"});
  }
}
