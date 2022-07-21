

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

// <!-- ----------------------Append div here--------------------- -->
