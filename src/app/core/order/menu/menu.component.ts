import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageUtilities } from '../../utilities/storageUtilities';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  customer : {name: string, table: string, comments: string};

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
  }
}
