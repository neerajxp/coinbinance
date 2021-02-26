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
  private serviceUrl = 'https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==';
  
    models1:Model1[]=[];

   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource = new UserDataSource(this.apiService);
  //dataSource = new UserDataSourceCB();
  displayedColumns: string[] = ['id', 'name', 'symbol'];
  
    constructor(private http: HttpClient, private apiService: ApiService) 
    {  
      
    }  
   
    ngAfterViewInit() {
      //this.dataSource.paginator = this.paginator; 
    }
    
    rawdata:CoinList[]=[];
  loadcoin(): void
  {
  const serviceUrl = 'https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==';
  const testUrl = 'https://api.github.com/users/mralexgray/repos';
  
     //console.log(this.dataSource);
    // let obs=this.http.get("https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==");
    // obs.subscribe((resp)=>console.log(resp));

    // this.http.get("https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==")
    // .subscribe(data=>{
    //     this.displayedColumns=data as string[];        
    // })
    // console.log(this.displayedColumns);


    //return of([]);
     //let x= new CoinList(1, 'x', 'x');


     this.http
    .get<Model1>(testUrl)
    .pipe(
      map((data:any)=>
        data.map(
          (item:any)=>
          new Model1(item.id, item.name)
        )
      )
    ).subscribe((res)=>console.log(res));

    
    this.http
    .get<Model1>(serviceUrl)
    .pipe(
      map((data:any)=>
        data.map(
          (item:any)=>
          new Model1(1, "2")
        )
      )
    ).subscribe((res)=>console.log(res));


     

     
  }
}

// export class UserDataSourceCB extends DataSource<any> {
//   constructor(private http: HttpClient,) {
//     super();
//   }
//   private serviceUrl = 'https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==';
  
//   // connect(): Observable<CoinList[]> 
//   // {
//   //   //return this.apiService.getCoins();
    
//   //   // return this.http.get(this.serviceUrl).pipe(
//   //   //   map((data:any[])=>data.map((item:any) => new (
        
//   //   //   ))
//   //   // );
//   //   //obs.subscribe((resp)=>console.log(resp));
//   //   //return obs;
//   // }

//   disconnect() 
//   {

//   }
// }

export class UserDataSource extends DataSource<any> {
  constructor(private apiService: ApiService) {
    super();
  }
  connect(): Observable<CoinList[]> 
  {
    return this.apiService.getCoins();
  }

  disconnect() 
  {

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
