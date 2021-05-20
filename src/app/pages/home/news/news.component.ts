import {AfterViewInit, Component, OnInit } from '@angular/core'; 
import { map } from 'rxjs/operators';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table'; 
import { NewsModel } from 'src/app/shared/model/newsmodel';

const ELEMENT_DATA_NEWS: NewsModel[] = [];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  public dataSourceNews = new MatTableDataSource<NewsModel>(ELEMENT_DATA_NEWS);
  displayedColumnsNews: string[] = [ 'thumbnail','headline',];

  constructor(private http: HttpClient) 
  { 

  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {      
    this.loadLatestNews();
  }

  
  loadLatestNews(): void
  {
    //const serviceUrl = 'https://coinfn1.azurewebsites.net/api/GetRSSNewsVerge?code=4rmmtP480deJ7doTLVuzpUBhvFSa5CDzq8ehr2kK15Xj5CMm1d5q4g=='; 
    const serviceUrl = 'https://defidecrypt.com/api/newsrss'; 

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

}
