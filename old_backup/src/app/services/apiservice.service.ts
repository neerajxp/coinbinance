import { Injectable }   from '@angular/core';
import { HttpClient, HttpClientModule }   from '@angular/common/http';
import { Observable }   from 'rxjs';
// import 'rxjs/add/operator/map';
import { CoinList } from '../model/coinlist';
// import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private serviceUrl = 'xxxxxxxxxxxxxxxxxxxhttps://coinfn1.azurewebsites.net/api/HttpTrigger?code=n8W46TK6PIJAaMvDhRLSTdFjYIGV0P9S7agFnsWATi7TIPbtOORaCQ==';
  
    
  constructor(private http: HttpClient) { }

  getCoins(): Observable<CoinList[]> {
    return this.http.get<CoinList[]>(this.serviceUrl);
    
  }
}

