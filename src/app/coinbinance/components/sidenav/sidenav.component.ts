import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DataSource} from '@angular/cdk/collections';
import { ApiService } from 'src/app/services/apiservice.service';
import { Observable, of }   from 'rxjs';
import { CoinList } from 'src/app/model/coinlist';
import { map } from 'rxjs/operators';  

import { CoinlistComponent } from '../coinlist/coinlist.component';
import { CompileSummaryKind } from '@angular/compiler';
import {Model1} from '../../../model/model1';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit    
{
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   dataSource = new MatTableDataSource<CoinList>(ELEMENT_DATA_COINS);
 
  displayedColumns: string[] = ['id', 'name', 'symbol', 'price'];
  
    constructor(private http: HttpClient, private apiService: ApiService) 
    {  
      
    }  
   
    ngAfterViewInit() {
      //this.dataSource.paginator = this.paginator; 
    }

 
  loadcoin(): void
  {
    const serviceUrl = 'https://coinfn1.azurewebsites.net/api/GetCoinList?code=m/nSeXha7bc8toDseuKYaFBCB56zf96l6XgAx59iRp0gRblFX2kXjA=='; 
  
     this.http
    .get<CoinList>(serviceUrl)
    .pipe(
      map((data:any)=>
        data.map(
          (item:any)=>
          new CoinList(item.id, item.name, item.symbol, item.price)
        )
      )
    ).subscribe(data=>{
      this.dataSource=data;
      console.log(data);
    })     
  }
} 

export interface CoinsElement {
  id: number;
  name: string; 
  symbol: string;
}

export interface PeriodicElement {
  id: number;
  name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', symbol: 'H'},
  {id: 2, name: 'Helium', symbol: 'He'},
  {id: 3, name: 'Lithium',symbol: 'Li'},
  {id: 4, name: 'Beryllium',  symbol: 'Be'} 
];

const ELEMENT_DATA_COINS: CoinList[] = [];