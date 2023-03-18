import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() menuItem: any;
  @Output() itemListModified = new EventEmitter<{orderList: Map<string, string>, category: string}>();

  panelOpenState = false;
  orderArray = new Map();

  addItem(itemCode: string){
    if(this.orderArray.has(itemCode)){
      this.orderArray.set(itemCode, this.orderArray.get(itemCode)+1);
    }
    else{
      this.orderArray.set(itemCode, 1);
    }
    this.itemListModified.emit({orderList: this.orderArray, category: this.menuItem.categoryName});
  }

  subtractItem(itemCode: string){
    if(this.orderArray.has(itemCode)){
      this.orderArray.set(itemCode, this.orderArray.get(itemCode)-1);
      if(this.orderArray.get(itemCode) == 0){
        this.orderArray.delete(itemCode);
      }
    }
    this.itemListModified.emit({orderList: this.orderArray, category: this.menuItem.categoryName});
  }

  getItemCount(itemCode: string){
    if(this.orderArray.has(itemCode)){
      return this.orderArray.get(itemCode);
    }
    else
      return 0;
  }

  getColor(count: number){
    if (count == 0){
      return '#adadad'
    }else{
      return '#02bd21'
    }

  }
}
