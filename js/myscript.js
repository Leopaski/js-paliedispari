function randomNumber(){
    number = Math.floor(Math.random()*5+1);
    return number;
}
console.log(randomNumber())
let result="";
let userNumber=document.getElementById(numero).value;
if((randomNumber()+userNumber)%2===0){
    result="PARI"
} else {
    result="DISPARI"
}