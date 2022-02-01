const beauty = document.createElement("h1");
        beauty.innerText = "Find Your Makeup Products";
        document.body.append(beauty)

// const brand = document.createElement("ul")
// brand.innerHTML =`><li>almay</li>  <li>Alva</li>  <li>Anna Sui</li>   <li>Annabelle</li>   <li>Benefit</li>   <li>Boosh</li> 
//  <li>Burt's Bees</li>   <li>Butter London</li>  <li>C'est Moi</li>    </li>
//  <li>Cargo Cosmetics </li>
//  <li>China Glaze </li>
//  <li>Clinique </li>
//  <li>Coastal Classic Creation </li>
//  <li>Colourpop </li>
//  <li>Covergirl </li>
//  <li>Dalish </li>
//  <li>Deciem </li>
//  <li>Dior </li>
//  <li>Dr. Hauschka </li>
//  <li>E.L.F. </li>
//  <li>Essie </li>
//  <li>Fenty </li>
//  <li>Glossier </li>
//  <li>Green People </li>
//  <li>Iman </li>
//  <li>L'oreal </li>
//  <li>Lotus Cosmetics Usa </li>
//  <li>Maia's Mineral Galaxy </li>
//  <li>Marcelle </li>
//  <li>Marienatie </li>
//  <li>Maybelline </li>
//  <li>Milani </li>
//  <li>Mineral Fusion </li>
//  <li>Misa </li>
//  <li>Mistura </li>
//  <li>Moov </li>
//  <li>Nudus </li>
//  <li>Null </li>
//  <li>Nyx </li>
//  <li>Orly </li>
//  <li>Pacifica </li>
//  <li>Penny Lane Organics </li>
//  <li>Physicians Formula </li>
//  <li>Piggy Paint </li>
//  <li>Pure Anada </li>
//  <li>Rejuva Minerals </li>
//  <li>Revlon </li>
//  <li>Sally B's Skin Yummies </li>
//  <li>Salon Perfect </li>
//  <li>Sante </li>
//  <li>Sinful Colours </li>
//  <li>Smashbox </li>
//  <li>Stila </li>
//  <li>Suncoat </li>
//  <li>W3llpeople </li>
//  <li>Wet N Wild </li>
//  <li>Zorah </li>
//  <li>Zorah Biocosmetiques </li>
// `
// document.body.append(brand)

const product = document.createElement("ul", "id = lists" , "type=none")
product.innerHTML =`<li>Blush</li>  
<li>Bronzer</li>  
<li>Eyebrow</li>   <li>Eyeliner</li>  
 <li>Eyeshadow </li>
 <li>Foundation </li>
 <li>Lip Liner </li>
 <li>Lipstick</li>
 <li>Mascara </li>
 <li>Nail Polish </li>

`
document.body.append(product)


async function call() {
    try {
        let data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        let allData = await data.json();
        console.log(allData);


        


        allData.forEach(product => {
            let makeup = document.createElement("div");
            makeup.setAttribute("class", "container");
            makeup.innerHTML = `
            <h2>${product.brand}</h2>
            <img src=${product.image_link}
            class = "image"/>
            <div class = "info">
            <p><span><strong>Brand:</strong></span>${product.brand}</P>
            <p><span><strong>Name:</strong></span>${product.name}</p>
            <p><span><strong>Price:</strong></span>${product.price}</p>
            <p><span><strong>Product_link:</strong></span>${product.product_link}</p>
            <p><span><strong>Description:</strong></span>${product.description}</p>
         
            <a href=${product.product_link}> click here<a/>
           

           </div> `
           document.body.appendChild(makeup);
        });
    } 
    catch (error){
        console.log("Error 404");
    }
}
call();

