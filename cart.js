
let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
document.querySelector("#total_item").innerHTML = cartData.length + " " ;
totalPrice(cartData)
display(cartData)
function display(cartData){
    document.querySelector(".container").innerHTML="";
    cartData.forEach(function(ele,index){
        let maindiv=document.createElement("div");
        maindiv.setAttribute("class", "maindiv");
        
        let offerdiv=document.createElement("div");
        offerdiv.innerText = "Get"+" "+ele.OFF+" "+"off";
         offerdiv.setAttribute("class", "offer");

        let mainimg=document.createElement("img");
         mainimg.src = ele.image;
         mainimg.setAttribute("class", "mainimg");

        let namediv=document.createElement("div");
        let childp1=document.createElement("p");
        childp1.innerText = ele.Brand;
        let childp2=document.createElement("p");
        childp2.innerText = ele.productName;

        namediv.append(childp1,childp2)

        let select=document.createElement("select");
        select.value = ele.QtyPiece;
        select.setAttribute("class", "select");


        let truckdiv=document.createElement("div");
        
        let pricediv=document.createElement("div");
        pricediv.setAttribute("class", "pricediv");
        let mrp=document.createElement("p");
        mrp.innerText="MRP:"+ele.productprice +"/kg";
        mrp.style.marginRight="10px";
        
        

        let cuttp=document.createElement("del");
        cuttp.innerText=ele.StrikePrice;
        cuttp.style.fontSize="13px";
        pricediv.append(mrp,cuttp)

        let del_div=document.createElement("div");
        del_div.setAttribute("class", "del_div");
        let trimg=document.createElement("img");
         trimg.src="./imgs/delivery-truck.png";
         trimg.style.width="20%";
        let del_p=document.createElement("p");
        del_p.innerText=ele.Date;

        del_div.append(trimg,del_p);

        let inputdiv=document.createElement("div");
        inputdiv.setAttribute("id","last") ;
        let qtydiv=document.createElement("div");
        qtydiv.innerText = "Qty" ;
        qtydiv.setAttribute("class","Qty");

        let quantity=document.createElement("input");
        quantity.type="number";
        quantity.setAttribute("class","quantity");
        

        let cartbtn=document.createElement("div");
        cartbtn.setAttribute("class", "cartbtn");
        let addp=document.createElement("p");
        addp.innerText="REMOVE";
        addp.style.fontSize="12px";
        let logoimg=document.createElement("img");
        logoimg.src="https://cdn-icons-png.flaticon.com/128/117/117641.png";
        logoimg.style.width="25%";

        cartbtn.addEventListener("click", function() {
            deleteItem(ele,index);
        })

        cartbtn.append(addp,logoimg);
        inputdiv.append(qtydiv,quantity,cartbtn);

        truckdiv.append(pricediv,del_div,inputdiv);
        maindiv.append(offerdiv,mainimg,namediv,select,truckdiv);

        document.querySelector(".container").append(maindiv);

    });
}

// ----------------------addtocart function--------

function deleteItem(ele,index){
    cartData.splice(index,1);
    alert("Remove Item Successfully!"); 
    display(cartData)
    totalPrice(cartData)
    localStorage.setItem("cartData",JSON.stringify(cartData));
    document.querySelector("#total_item").innerHTML = cartData.length + " " ;
}

function totalPrice(cartData) {
    let ans = cartData.reduce(function (acc, ele) {
        return acc + Number(ele.productprice)
    },0);

    let price = document.querySelector("#total");
    price.innerText = ans;
}