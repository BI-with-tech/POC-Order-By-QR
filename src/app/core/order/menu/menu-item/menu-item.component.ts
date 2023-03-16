import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() menuItem: any;

  panelOpenState = false;
  orderArray = new Map();

  addItem(itemCode: string){
    if(this.orderArray.has(itemCode)){
      this.orderArray.set(itemCode, this.orderArray.get(itemCode)+1);
    }
    else{
      this.orderArray.set(itemCode, 1);
    }
    console.log(this.orderArray);
  }

  subtractItem(itemCode: string){
    if(this.orderArray.has(itemCode)){
      this.orderArray.set(itemCode, this.orderArray.get(itemCode)-1);
      if(this.orderArray.get(itemCode) == 0){
        this.orderArray.delete(itemCode);
      }
    }
    console.log(this.orderArray);
  }

  getItemCount(itemCode: string){
    if(this.orderArray.has(itemCode)){
      return this.orderArray.get(itemCode);
    }
    else
      return 0;
  }
}
