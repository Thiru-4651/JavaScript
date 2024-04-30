function buttonclick()
{
    var name= document.getElementById("name");
    var lastname=document.getElementById("lastname")
    var phonenumber=document.getElementById("num");

    if(name.value.length<15)
    {
        alert("Name was not in correct form");
        
        return false;
    }
    if(lastname.value.length>1 ||lastname.value.length<1)
    {
        alert("Last name must have initial");
        return false;
    }
    if(phonenumber.value.length <10 || phonenumber.value.length >10 )
    {
        phonenumber.style.border="solid 3px red";
        return false;
    }
}
function showingdetails()
{
    document.write("Name: "+name)
}