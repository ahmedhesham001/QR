let imgBox = document.getElementById("imgBox"), 
qrImg = document.getElementById("qrImg"), 
input = document.getElementById("qrTxt"),
button = document.querySelector("button");
button.addEventListener("click",()=>
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value);