import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageUtilities } from '../../utilities/storageUtilities';
import { MenuBlueprint } from './menu.blueprint';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  customer : {name: string, table: string, comments: string};
  menuList: any;
  totalAmount: number;

  orderList = new Map<string, any>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.customer = {
      name: this.route.snapshot.params['name'], 
      table: this.route.snapshot.params['table'], 
      comments: this.route.snapshot.params['comments'] 
    }
    StorageUtilities.setCustomerName = this.customer.name;
    StorageUtilities.setTableNumber = this.customer.table;
    StorageUtilities.setPrimaryComments = this.customer.comments;
    this.menuList = MenuBlueprint.getMenuList;
  }


  onItemListModified(menuItemResponse: Map<string, any>){
    this.orderList.set(menuItemResponse['category'], menuItemResponse['orderList']);
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    console.log("I came here");
    this.totalAmount = 0;
      for(let entry of this.orderList.entries()){
        var category = entry[0];
        for(let item of entry[1]){
          var itemId = item[0];
          var quantity = item[1];
          var price = this.menuList.category
          console.log(category, itemId, quantity);
        }
        console.log(entry[0]);
        console.log(entry[1]);
      }
  }

}
