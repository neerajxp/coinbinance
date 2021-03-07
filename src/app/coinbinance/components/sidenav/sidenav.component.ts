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
import { RSSModel } from '../../../model/rssmodel';
import * as xml2js from 'xml2js';
import { NewsModel } from 'src/app/model/newsmodel';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit    
{
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   dataSource = new MatTableDataSource<CoinList>(ELEMENT_DATA_COINS);
   dataSourceNews = new MatTableDataSource<NewsModel>(ELEMENT_DATA_NEWS);
 
  displayedColumns: string[] = ['name', 'symbol', 'price', "percent_change_24h"];
  displayedColumnsNews: string[] = ['newssource','thumbnail','headline', 'newsurl', 'author', ];
  
    constructor(private http: HttpClient, private apiService: ApiService) 
    {  
      
    }  
   
    ngAfterViewInit() {
      //this.dataSource.paginator = this.paginator; 
      this.loadcoin();
      this.loadLatestNews();
    }

theVergeRssDara: RSSModel = new RSSModel();
isFeedDataArrived = false;
// GetRssFeedData() 
// {
// this.rssService.theVerge().subscribe(
// data => {
// console.log("data : ");
// let parseString = xml2js.parseString;
// parseString(data, (err, result: RSSModel) => {
// this.theVergeRssDara = result;
// this.isFeedDataArrived = true;
// }
// )
// });
// }

 

  loadLatestNews(): void
  {
    const serviceUrl = 'https://coinfn1.azurewebsites.net/api/GetRSSNewsVerge?code=4rmmtP480deJ7doTLVuzpUBhvFSa5CDzq8ehr2kK15Xj5CMm1d5q4g=='; 

    this.http
    .get<NewsModel>(serviceUrl)
    .pipe(
      map((data:any)=>
        data.map(
          (item:any)=>
          new NewsModel(item.source, item.id,
            item.newssource,
            item.headline,
            item.content,
            item.newsurl,
            item.thumbnail,
            item.published,
            item.hrsago,
            item.keywords,
            item.author)              
        )
      )
    ).subscribe(data=>{
      this.dataSourceNews=data;
      console.log(data);
    })     
  }

    loadnews():void
    {
      const serviceurl="https://coinfn1.azurewebsites.net/api/GetRSSNewsVerge?code=4rmmtP480deJ7doTLVuzpUBhvFSa5CDzq8ehr2kK15Xj5CMm1d5q4g==";
      
      this.http
      .get(serviceurl,  { responseType: 'text' })
      .subscribe(data=>
      {
        let parseString=xml2js.parseString;
        parseString(data,(err, result:RSSModel)=>{
          this.theVergeRssDara=result;
          this.isFeedDataArrived=true;
          console.log("rss feed");
          console.log(data);
        })   
      })     
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
const ELEMENT_DATA_NEWS: NewsModel[] = [];