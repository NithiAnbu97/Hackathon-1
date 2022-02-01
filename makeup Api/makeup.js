fetch("http://makeup-api.herokuapp.com/api/v1/products.json").then(function(data){
    return data.json();
}).then(function(productData){
      var div = document.createElement("div");
      div.setAttribute("class","container");
      var row = document.createElement("div");
      row.setAttribute("class","row");
    //   row.style.alignItems = "center";
      div.append(row);
    //   div.style.height ="100px";
    //   div.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";

     productData.forEach(function(country){
        var card = document.createElement("div");
        card.setAttribute("class"," card card-design text-white col-lg-4 col-sm-12");
        row.appendChild(card);

      var cardHeader = document.createElement("div");
      cardHeader.setAttribute("class","card-header bg-dark text-white d-flex justify-content-center");
      cardHeader.innerHTML = products.id.brand;
      card.append(cardHeader);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class","card-body p-3 card-design");
      cardBody.innerHTML = `<img class="mx-auto d-block" src= ${products.img.jpg} height = '100' width='200'>`

      if(brand.name){
        var brandText = document.createElement("p");
      brandText.setAttribute("class","text-center");
      brandText.innerText = `Capital : ${brand.name}`;
      cardBody.append(brandText);
      }
        var RegionText = document.createElement("p");
        RegionText.setAttribute("class","text-center");
        RegionText.innerText = `Region : ${country.region}`;
        cardBody.append(RegionText);
        card.append(cardBody);


      var button = document.createElement("button");
      button.setAttribute("type","button");
      button.setAttribute("class","btn btn-primary btn-sm text-white");
      button.addEventListener("click",function (){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=6e1752da63232595e530480afe988233`)
        .then(function(resp) { return resp.json() })
        .then(function(climate){
            alert(`The temperature of ${country.name.common} is ${climate.main.temp}`);

        }).catch(function (error){
          alert("weather report not found");
        })
      })
      button.innerText = "Click for weather";
      card.append(button);

     });

      document.body.append(div);

}).catch(function(error){
    console.error("error");
})






// async function getproducts(){
//     try {
//         var productData = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
//         var list = await productData.json()
//         console.log(list)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getproducts()





call();

// Submittting our Form data througth API..(POST method)
var editClicked = false;
var currentId;

function decide() {
    if (editClicked == false) {
        postData();
    } else {
        upd(currentId);
        editClicked = false;

    }

}

async function postData() {

    try {
        var formData = {
            brand: document.getElementById("name").value,
            product_type: document.getElementById("product_type").value,
            image: document.getElementById("image").value,
            price: document.getElementById("price").value,
            
        }
        var userEnteredData = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "content-type": "application/json"
            }
        });
    } catch (err) {
        alert("Failed Try Again later...");
    }
    alert("User Successfully Registered");
    call();
    clear();
}

async function getData() {
    try {
        var allData = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        var userData = await allData.json();
        document.getElementById("tbody").innerHTML = " ";
        userData.forEach((ele) => {
            var id = ele.id;
            var brand = ele.brand;
            var product_type = ele.product_type;
            

            var trBody = document.getElementById("tbody");

            var tr = document.createElement("tr");
            trBody.appendChild(tr);

            var Idtd = document.createElement("td");
            Idtd.innerText = id;

            var Brandtd = document.createElement("td");
            Brandtd.innerText = brand;

            var Product_typetd = document.createElement("td");
            Product_typetd.innerText = product_type;


            tr.append(Idtd, Brandtd, Product_typetd);



            edit.addEventListener("click", () => {
                currentId = id;
                editClicked = true;
                // decide();
                updateInputFieldData(currentId);
            })

            deleteTd.addEventListener("click", () => {
                currentId = id;
                del(currentId);
            })

        });
    } catch (err) {
        console.log("Wait an Moment .. Try after some time")
    }
}

async function call() {
    try {
        let data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        let allData = await data.json();
        console.log(allData);

        const beauty = document.createElement("h1");
        beauty.innerText = "Find Your Makeup Products";
        document.body.append("Find Your Makeup Products")


        
        

        allData.forEach(product => {
            let makeup = document.createElement("div");
            makeup.setAttribute("class", "container");
            makeup.innerHTML = `
            <h2>${product.brand}</h2>
            <img src=${product.image_link}
            class = "image"/>
            <div class = "info">
            <p><span><strong>brand:</strong></span>${product.brand}</P>
            <p><span><strong>Name:</strong></span>${product.name}</p>
            <p><span><strong>price:</strong></span>${product.price}</p>
            <p><span><strong>product_link:</strong></span>${product.product_link}</p>
            <p><span><strong>Description:</strong></span>${product.description}</p>
          <a href="http://makeup-api.herokuapp.com/api/v1/products.json">
           <button onclick= "getProduct_link('${product.product_link}')">Get product_link</button>

           </div> `
            
// const btn = document.getElementById("btn");
// btn.addEventListener("click", 
//  function(){
//      var name = document.getElementById("myName").value
//      alert("Name: " + name);
//  })
            //   makeup.appendChild(button)
           document.body.appendChild(makeup);
        });
    } 
    catch (error){
        console.log("Error 404")
    }
}

call();

async function getProduct(makeup) {
    let product_link = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`);
    let productData = await data.json();

   alert(product_link.value)
}
