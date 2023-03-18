import { Component } from '@angular/core';
import { StorageUtilities } from '../../utilities/storageUtilities';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  name: string;
  table: string;
  comments: string;
  tableNumbers: string[];
  openStatusPage: boolean = false;
  isTableOccupied: boolean = false;
  redirectPath: string;

  ngOnInit(){
    this.tableNumbers = ['1', '2', '3', '4', '5', '6', '7'];
  }

  checkWhetherTableIsOccupied(){
    this.isTableOccupied = JSON.parse(StorageUtilities.getOccupiedTables).includes(this.table);
    this.constructRedirectPath();
  }

  constructRedirectPath(){
     this.redirectPath = (this.isTableOccupied)? '/status' : ('/menu/' + this.name + '/' + this.table + '/' + this.comments);
  }
}
