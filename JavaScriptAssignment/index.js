function save()
{
    var bookName= document.getElementById("book").value;
    // var mail=document.getElementById("mail").value;
    var authorName=document.getElementById("name").value;
    var authorMail=document.getElementById("mail").value
    var published=document.getElementById("published").value;
    var price=document.getElementById("price").value;

    if(bookName.length>50)
    {
        // alert("Numeric values not allowed")
        alert("Book name length should not exceed 50");
        // bookName.style.border="solid 3px red"
        document.getElementById("book").style.border="solid 3px red";
        document.getElementById("book").style.visibility="visible";
    }

    // if(bookName.value=='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9')
    // {
    //     alert("Numeric values not allowed for book name");
    //     document.getElementById("book").style.border="solid 3px red";
    // }

    // if(authorName.trim=='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9')
    // {
    //     alert("Numeric values not allowed for author name");
    //     // alert("Name should be in the valid form");
    //     document.getElementById("name").style.border="solid 3px red";
    // }



    // if(authorMail.contains())
    // {

    // }

    // return true;
}
function show()
{
    // document.getElementById("showbookname").value=document.getElementById("book").value;
    // document.write("Book Name: "+document.getElementById("book").value);

    // var mail=document.getElementById("showmail").value;

    // document.getElementById("showmail").value=document.getElementById("mail").value;
    // document.write("MailId: "+document.getElementById("mail").value);

    // document.write("Author Name: "+document.getElementById("name").value);

}


function cancel()
{
    // document.getElementById("show").value=document.oninput(reset)
}
