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
  more = new Map();

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

  getCountColor(count: number){
    if (count == 0){
      return '#adadad'
    }else{
      return '#02bd21'
    }

  }

  getSubColor(count: number){
    if (count == 0){
      return '#adadad'
    }else{
      return "red"
    }

  }

  descContent(item){
    let desc = new String (item.itemDesc);
  
    if (!this.more.has(item.itemCode)){
      this.more.set(item.itemCode, false);
    }
    console.log(this.more[item.itemCode])
    if ((desc.length > 50) && (this.more[item.itemCode] !== true)){
      return desc.slice(0, 47) + '...'
    }else{
      return desc
    }
  }
  descClicked(item){
    this.more[item.itemCode] = !this.more[item.itemCode]
  }
}
