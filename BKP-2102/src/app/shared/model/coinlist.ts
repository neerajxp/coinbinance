export class CoinList {
    constructor(
      public source:string,
      public id: number,
      public name: string,
      public symbol: string,
      public price: number,
      public last_updated: Date,
      public volume_24h: number,
      public percent_change_1h: number,
      public percent_change_24h: number,
      public percent_change_7d: number,
      public percent_change_30d: number,
      public market_cap: number,
      public rank: number
    ){}
  }
  