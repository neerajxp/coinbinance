export class NewsModel
{        
    constructor
    (
    public source: string,
    public id: number,        
    public newsource: string,
    public headline: string,
    public content: string,
    public newsurl: string,
    public icon: string,      
    public published: Date,
    public hrsago: number,
    public keywords: string,
    ){}         
}
 