//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
let imgBox = document.getElementById("imgBox"); 
let qrImg = document.getElementById("qrImg"); 
let input = document.getElementById("qrTxt");
let button = document.querySelector("button");
function generateQr() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
}
button.addEventListener("click",generateQr);