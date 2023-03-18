import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  totalAmount: number = 0;
  orderList = new Map<string, any>();
  completeOrderDetails = new Map<string, any>();

  constructor(private route: ActivatedRoute, private router: Router) { }

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
    this.calculateTotalPriceAndMakeOrderList();
  }

  calculateTotalPriceAndMakeOrderList(){
    this.totalAmount = 0;
    this.completeOrderDetails = new Map<string, any>();
      for(let entry of this.orderList.entries()){
        var arrOrderDetails = [];
        var category = entry[0];
        var menuListOfCategory = this.menuList.filter((record) => {
          return record.categoryName == category;
        })[0];
        for(let item of entry[1]){
          var itemId = item[0];
          var quantity = item[1];
          var individualMenuItem = menuListOfCategory.items.filter((record) => {
            return record.itemCode == itemId;
          })[0];
          var individualMenuItemAmount = quantity*individualMenuItem.itemPrice;
          this.totalAmount += individualMenuItemAmount;
          individualMenuItem["quantity"] = quantity;
          individualMenuItem["amount"] = individualMenuItemAmount;
          arrOrderDetails.push(individualMenuItem);
        }
        this.completeOrderDetails.set(category, arrOrderDetails);
      }
  }

  onOrderButtonClicked(){
    StorageUtilities.setOrderDetails = JSON.stringify(Array.from(this.completeOrderDetails.entries()));

    //Date
    const currDate = new Date();

    var newOrder = new Map<String, any>();
    newOrder.set("customerName", StorageUtilities.getCustomerName);
    newOrder.set("tableNumber", StorageUtilities.getTableNumber);
    newOrder.set("comments", StorageUtilities.getPrimaryComments);
    newOrder.set("orderList", JSON.stringify(Array.from(this.completeOrderDetails.entries())));
    newOrder.set("orderTime", currDate.toLocaleDateString() + " " + currDate.toLocaleTimeString());
    newOrder.set("orderStatus", "New");

    if(StorageUtilities.getAllOrders != null){
      var existingOrders = JSON.parse(StorageUtilities.getAllOrders);
      existingOrders.push(JSON.stringify(Array.from(newOrder.entries())));
      StorageUtilities.setAllOrders = JSON.stringify(existingOrders);
    }
    else{
      var ordersArray = [];
      ordersArray.push(JSON.stringify(Array.from(newOrder.entries())));
      StorageUtilities.setAllOrders = JSON.stringify(ordersArray);
    }
    
    var listOfOccupiedTables = JSON.parse(StorageUtilities.getOccupiedTables);
    if (listOfOccupiedTables == null) listOfOccupiedTables = [];
    listOfOccupiedTables.push(StorageUtilities.getTableNumber);
    StorageUtilities.setOccupiedTables = JSON.stringify(listOfOccupiedTables);
    this.router.navigate(['./status']);
  }

}
