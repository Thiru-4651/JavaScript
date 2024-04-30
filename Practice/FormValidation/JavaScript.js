function Validate()
{
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");
    if(username.value.trim()=="")
    {
        // alert("Blank UserName");
        username.style.border="solid 3px red";
        document.getElementById("labelId").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Blank Password");
        return false;
    }
    else if(password.value.trim().length<5)
    {
        alert("Password is too short");
        return false;
    }
    else
    {
        return true;
    }
}