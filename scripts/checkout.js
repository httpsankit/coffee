
var btn=document.getElementById("confirm")
btn.addEventListener("click",alertx)

function alertx()
{
    if(document.getElementById("name").value!="" && document.getElementById("number").value!=""&&document.getElementById("address").value!=""){

        alert("Your order is accepted ")

    setTimeout(function()
    {
        alert("Your order is being Prepared")
    },3000)

    setTimeout(function()
    {
        alert("Your order is being packed")
    },8000)

    setTimeout(function()
    {
        alert("Your order is out for delivery")
    },10000)

    setTimeout(function()
    {
        alert("Order delivered")
    },12000)

    }
    else{
        alert("please fill correct details")
    }
    
    
}