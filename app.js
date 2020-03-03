let Rectangle=function (x, y, length, width)
{
    //start x
    this.x=x;
    this.getX=function ()
    {
        return this.x;
    };
    this.setX=function (x)
    {
        this.x=x;
    };
    //end x
    //start y
    this.y=y;
    this.getY=function ()
    {
        return this.y;
    };
    this.setY=function (y)
    {
        this.y=y
    };
    //end y
    //start length
    this.length=length;
    this.getLength=function ()
    {
        return length;
    };
    this.setLength=function (length)
    {
        this.length=length;
    };
    //end length
    //start width
    this.width=width;
    this.getWidth=function ()
    {
        return width;
    };
    this.setWidth=function (width)
    {
        this.width=width;
    };
    //end width
    //start area
    this.getArea=function ()
    {
        return this.length*this.width;
    };
    //end area
    //start perimeter
    this.getPerimeter=function ()
    {
        return (this.length+this.width)*2;
    };
    //end perimeter
    //start display
    this.display=function ()
    {
        let c=document.getElementById("rectangle");
        let ctx=c.getContext("2d");
        ctx.fillStyle="blue";
        ctx.fillRect(x, y, length, width);
    };
    //end display
};

let rectangle= new Rectangle(20,50, 150, 50);
rectangle.display();
let perimeter=rectangle.getPerimeter();
let area=rectangle.getArea();
let showResult=document.getElementById("result").innerHTML="Dien tich hinh chu nhat: "+area+"<br>"+"Chu vi hinh chu nhat: "+perimeter;