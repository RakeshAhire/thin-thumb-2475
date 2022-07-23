let userName=JSON.parse(localStorage.getItem("login_user")) || [];
// document.querySelector("#username").innerText = userName.name;
let cartData=JSON.parse(localStorage.getItem("cartData")) || [];

document.querySelector("#total_item").innerHTML = cartData.length + " " ;


function moreRead(){
    let moreText = document.getElementById('more');
    let btnText = document.getElementById("next");
    if(btnText.innerText=="Read More"){
        moreText.style.display="inline";
        btnText.innerText="Read Less";
        btnText.style.display="none";
    }else{
        moreText.style.display="none";
        btnText.innerText="Read More";
    }  
}

display(userName)
function display(userName){
    userName.forEach(function(ele) {
    document.querySelector("#username").innerText = ele.name;

});
}
document.querySelector("#username").addEventListener("click", function(ele,index) {
    userName.splice(index, 1);
    window.location.href = "index.html";
});


// <!-- ----------------------Append div here--------------------- -->
