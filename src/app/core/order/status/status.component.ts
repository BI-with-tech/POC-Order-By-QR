import { Component } from '@angular/core';
import { StorageUtilities } from '../../utilities/storageUtilities';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
  orderDetails: any;
  ngOnInit(){
    this.orderDetails =  new Map(JSON.parse(StorageUtilities.getOrderDetails));
    console.log(this.orderDetails);
  }
}
