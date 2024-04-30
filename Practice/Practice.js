// document.write("Hello World from javascript");
// document.write("Hello from live server");
// alert("popup");
var a = 50;
var b = 10;
document.write("<p>Result=" + (a + b) + "</p>");

// If- Else statement
if (b > a) {
    document.write(b);
}
else {
    document.write(a);
}

document.write("<br>")


// Function for printing first 5 numbers

for (var i = 1; i <= 5; i++) {
    //Global Variable
    var1="Thiru"
    printingNumbers(i);
    document.write("<br>");
}

document.write(var1);

function printingNumbers(x) {
    document.write(x);
}

document.write(var1);

var fruits= ["apple","banana","mango"];
document.write(fruits[1]);

// function cities(cityname,famousPlace,knownas)
// {
//     this.CityName="cityname";
//     this.Famousplace="famousPlace";
//     this.Knownas="knownas";
//     this.print=function()
//     {
//         document.write("Printing...");
//     }
// }

// var city1=new cities(chennai,marina,capital);

// document.write(city1.CityName);

var cities = {
    cityname:"chennai",
    famousplace:"mariena",
    knownas:"capital",
    printing: function()
    {
        document.write("Printing...");
    }
}
cities.printing();
document.write(cities.cityname);
document.write(cities.famousplace);


