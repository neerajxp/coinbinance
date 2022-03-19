import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort'; 
import { CoinList } from 'src/app/shared/model/coinlist'; 
import { map } from 'rxjs/operators';  
import * as xml2js from 'xml2js';
import { Observable, of }   from 'rxjs';

const ELEMENT_DATA_COINS: CoinList[] = [];

@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrls: ['./coinlist.component.scss']
})
 
export class CoinlistComponent implements AfterViewInit 
{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<CoinList>(ELEMENT_DATA_COINS); 

  displayedColumns: string[] = ['name', 'symbol', 'price', "percent_change_24h"];

  constructor(
      private http: HttpClient) {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadcoin();
  }
 
  loadcoin(): void
  {
    //const serviceUrl = 'https://coinfn1.azurewebsites.net/api/GetCoinList?code=m/nSeXha7bc8toDseuKYaFBCB56zf96l6XgAx59iRp0gRblFX2kXjA=='; 
    const serviceUrl = 'https://defidecrypt.com/api/coinlist'; 

    this.http
    .get<CoinList>(serviceUrl)
    .pipe(
      map((data:any)=>
        data.map(
          (item:any)=>
          new CoinList(
              item.source, 
              item.id, 
              item.name, 
              item.symbol, 
              item.price, 
              item.last_updated,
              item.volume_24h, 
              item.percent_change_1h, 
              item.percent_change_24h,
              item.percent_change_7d, 
              item.percent_change_30d, 
              item.market_cap, 
              item.rank)
        )
      )
    ).subscribe(data=>{
      this.dataSource=data;
      console.log(data);
    })     
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

 