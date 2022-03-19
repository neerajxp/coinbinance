import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'console';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 
  projectDescription : string = "";

  constructor( private http: HttpClient) 
  {
    
  }


  ngOnInit(): void {
    this.http
        .get('assets/blog/crypto.htm',
             { responseType: 'text' })
        .subscribe(data => {
            this.projectDescription = data;
        })
   
        console.log(this.projectDescription);
  }

}
