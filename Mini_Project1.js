/*Building a Mini Shopping Cart System Using JavaScript Variables and Data Types*/

let Item1Name="Mouse";
let Item1Price=40;
let Item1avalable=true;
let Item1quntity=1;

let Item2Name="Key Bord";
let Item2Price=50;
let Item2avalable=false;
let Item2quntity=0;

let Item3Name="phone";
let Item3Price=80;
let Item3avalable=true;
let Item3quntity=1;

let TotalItem1=Item1avalable ? Item1Price*Item1quntity:0;
let TotalItem2=Item2avalable ? Item2Price*Item2quntity:0;
let TotalItem3=Item3avalable ? Item3Price*Item3quntity:0;

let grandTotal=TotalItem1+TotalItem2+TotalItem3;

console.log(Item1Name+"= price:$"+Item1Price+" * quntity:"+Item1quntity+" ="+TotalItem1);
console.log(Item2Name+"= price:$"+Item2Price+" * quntity:"+Item2quntity+" ="+TotalItem2);
console.log(Item3Name+"= price:$"+Item3Price+" * quntity:"+Item3quntity+" ="+TotalItem3);
console.log("The grandTotal is: $"+TotalItem1+" + $"+TotalItem2+"+ $"+TotalItem3+"= $"+grandTotal);