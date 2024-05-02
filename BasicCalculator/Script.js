// function calculation()
// {
//     var result;
//     var num1=document.getElementById("num1");
//     var num2=document.getElementById("num2");
//     var operation=document.getElementById("operation");

//     if(num1=="" || num2=="" || operation=="")
//     {
//         alert("Field can't be empty");
//         return false;
//     }
//     else
//     {
//         switch(operation)
//         {
//             case '+':
//                 {
//                     result=num1+num2;
//                     break;
//                 }
//             case '-':
//                 {
//                     result=num1-num2;
//                     break;
//                 }
//             case '*':
//                 {
//                     result=num1*num2;
//                     break;
//                 }
//             case '/':
//                 {
//                     result=num1/num2;
//                     break;
//                 }
//         }
//         return true;
//     }

// }


const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value +=input;
}

function clearDisplay()
{
    display.value="";
}


function calculate()
{
    try
    {
        display.value=eval(display.value);
    }

    catch(error)
    {
        display.value="Error";
    }
}