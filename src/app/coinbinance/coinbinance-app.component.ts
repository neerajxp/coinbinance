import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { ToolbarComponent } from './components/toolbar/toolbar.component'; 
@Component({
  selector: 'app-coinbinance-app',
  templateUrl: './coinbinance-app.component.html',  
  styleUrls:  ['./coinbinance-app.component.scss']
})
export class CoinbinanceAppComponent implements OnInit {

  constructor(private http: HttpClient) { }  
  apiurl="";
  
  ngOnInit(): void {
     let obs=this.http.get("https://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==",
     {headers: new HttpHeaders().set("X-CMC_PRO_API_KEY","2563a5a6-1274-4943-b0b4-da724381039c")});

     obs.subscribe((resp)=>console.log(resp));
  }

}
