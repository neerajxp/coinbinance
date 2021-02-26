import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit    
{
    constructor(private http: HttpClient) { }  

    //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
     displayedColumns: string[] = ['id', 'name', 'symbol'];
    // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    ngAfterViewInit() {
      //this.dataSource.paginator = this.paginator; 
  }

  loadcoin():void
  {
    let obs=this.http.get("https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==");
    obs.subscribe((resp)=>console.log(resp));
    
  }
}

export interface CoinsElement {
  id: number;
  name: string; 
  symbol: string;
}

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'} 
];
