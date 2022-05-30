
function ccc()
{
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
    append(coffee)
}
ccc()
function append(data) {
    var container = document.getElementById("bucket")
    container.innerHTML = null
    var total=0

    data.forEach(function (ele,index) {
        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = ele.image
        console.log(image)
        var name = document.createElement("p")
        name.innerText = ele.title
        console.log(name)
        var price = document.createElement("p")
        price.innerText = ele.price
        console.log(price)
        var btn = document.createElement("button")
        btn.innerText = "remove coffee"
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function()
        {
            removecoffee(ele,index)
        })

         total=total+ele.price
        
        div.append(image, name, price, btn)
        container.append(div)
    })

    document.querySelector("#total_amount").innerText=total
}

function removecoffee(ele,index)
{
    event.preventDefault()
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
    coffee.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffee))
    console.log(coffee)
    append(coffee)

}