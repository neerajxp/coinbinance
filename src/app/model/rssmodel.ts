export class RSSModel
{
    constructor(
    feed:FeedModel=new FeedModel()
    ){}
}

export class FeedModel
{
    public title:string="";
    public icon:string="";
    public link:string="";
    constructor(
      
        entry:EntryModel = new EntryModel()
    ){}

}

export class EntryModel
{
    public title:string="";
    public content:ContentModel[]=new Array();
    public link:LinkModel[]=new Array();
    constructor(
      
    ){}
 
}

export class ContentModel
{
    constructor(
        _ : any
    )
    {} 
}

export class LinkModel
{
    $ : DollerModel[]=new Array();
}

export class DollerModel
{
    constructor(href:string)
    {      
    } 
}