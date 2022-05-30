// Add the coffee to local storage with key "coffee"

async function ccc() {
    count()
    var res = getdata()
    var data = await res
    console.log(data)
    append(data)
}
ccc()
async function getdata() {
    try {
        const url = `https://masai-mock-api.herokuapp.com/coffee/menu`
        let res = await fetch(url)
        let data = await res.json()
        return data.menu.data
    }
    catch (error) {
        console.log(error)
    }
}

function append(data) {
    var container = document.getElementById("menu")
    container.innerHTML = null

    data.forEach(function (ele) {
        var div = document.createElement("div")
        console.log(div)

        var price = document.createElement("p")
        price.innerText = ele.price

        console.log(price)

    

        var name = document.createElement("p")
        name.innerText = ele.title
        console.log(name)

        var image = document.createElement("img")
        image.src = ele.image
        console.log(image)
       
        var btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function()
        {
            sendtocoffee(ele)
        })
        div.append(image, name, price, btn)
        container.append(div)


    })
}
function sendtocoffee(ele)
{
    var bucket=JSON.parse(localStorage.getItem("coffee"))||[]
    bucket.push(ele)
    console.log(bucket)
    localStorage.setItem("coffee",JSON.stringify(bucket))
    count()
}

function count()
{
    var array=JSON.parse(localStorage.getItem("coffee"))||[]
    document.querySelector("#coffee_count").innerText=array.length
}

