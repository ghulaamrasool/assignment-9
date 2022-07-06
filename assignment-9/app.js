// Q no 1
var cr = new Date();
document.write(cr +"</br>");

// Q no 2

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var find = cr.getMonth();
document.write("Current Month:  " + month[find] + "</br>");

// Q no 3

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
 var Z = new Date().getDay();
 document.write("Today is  " + days[Z]);

 // Q no 4 

 var X = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var Y = cr.getDay();
 if (Y === 0 || Y===6){
alert("it's fun day")
 }
 else{
    alert("Not a funday")
 }

 document.write()

 //Q no 5

 var now = new Date();
 if (now.getDate() <=15 && now.getDate() >= 1){

     document.write("First fifteen days")
 }else{"Last fifteen days"}

//  Q no 6

 var mid = new Date();
 var t = mid.getTime();
 document.write("<h1>" + t/(1000*60) + "</h1>");
// Q no 7

 var time = new Date();
 var pm = time.getHours();
 if(pm >= 12 && pm <= 23){
    document.write("<h1>" + "It's PM" + "<h1>")
 }else("<h1>" + "It's AM" + "<h1>")

// Q noh1

var date = new Date("Dec 31, 2020");
document.wrh1e(date)

// Q no 9

var today = new Date();
var fast = new Date("april 2, 2022");
var today2 = today.getTime();
var g =  fast.getTime();
var z = today2-g;
var result = Math.round(z / (1000* 60 * 60 * 24))
document.write( "<h1>" + result + " Days passed away since 1st Ramadan." + "</h1>");

// Q no 10

var ref = new Date ();
var Start = new Date ("jan 01, 2022");
var msref = ref.getTime();
var msStart = Start.getTime();
var dif = msref-msStart;
var response = Math.ceil(dif/(1000))
document.write("On reference date: " + ref + "</br>");
document.write(response); 

// Q no11

var extract = new Date();
var ext2 = new Date(extract.setHours(22))
document.write(extract + "<br/>");
document.write(ext2 + "<br/>");

// Q no12

var year = new Date();
var year100 = new Date(year.setFullYear(1922)) 
document.write(year + "<br/>");
document.write(year100 + "</br>");

// Q no 13

 var age = +prompt("Enter your age")
var bd = new Date().getFullYear()-age;
console.log(bd)




// Q NO 13  K-E BILL


var customerName="Ghulam";
var month1=new Date().getMonth()
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var unit=234;
var charges=16;
var netBill=unit*charges;
var lateFee=350;
document.write("Name:"+ customerName);
document.write("<br>")
document.write("Month:"+month[month1]);
document.write("<br>")
document.write("units:"+unit);
document.write("<br>")
document.write("Per unit charge:"+charges);
document.write("<br>")
document.write("Latefee:"+lateFee);
document.write("<br>")
document.write("Bill in due date:"+netBill);
var m=new Date().getDate()
document.write("<br>")
if(m>3){
    netBill=unit*charges+lateFee;
    document.write("After due Date" + netBill)

}

