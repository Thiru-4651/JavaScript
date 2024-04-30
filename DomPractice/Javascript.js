function buttonclick()
{
    var x=document.getElementById("name1").value;
    var y=document.getElementById("password").value;

    if(x==y)
    {
        alert("UserName and Password is same");
    }
    else
    {
        alert("UserName and Password is not-same");
    }

}