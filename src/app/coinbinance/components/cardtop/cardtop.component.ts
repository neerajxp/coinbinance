import { Component, OnInit } from '@angular/core';

export class Todo
{
  constructor
  (
    public id:number,  
    public title:string,
    ) { }
}

@Component({
  selector: 'app-cardtop',
  templateUrl: './cardtop.component.html',
  styleUrls: ['./cardtop.component.scss']
})
export class CardtopComponent implements OnInit {

  public todos:Todo[]=[];
  constructor() { }

  ngOnInit()
  {
    this.todos=[
      {
        id:1,
        title:"BTC",
      },
      {
        id:2,
        title:"ETH",
      }, 
      {
        id:3,
        title:"ADA",
      }, 
      {
        id:4,
        title:"Monero",
      }, 
      {
        id:5,
        title:"Uniswap",
      }, 
    
    ]
  }

}
