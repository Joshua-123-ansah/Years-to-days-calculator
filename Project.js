let inputButton=document.querySelector("#connect");
let clickMeButton=document.querySelectorAll(".clickMe")[0];
let resetButton=document.getElementsByClassName("reset")[0];
let span=document.querySelector(".result");
clickMeButton.addEventListener("click", yearToDayCalculation )
function yearToDayCalculation(){
    var days=inputButton.value*365;
    span.innerHTML=days;
}
resetButton.addEventListener("click",reset);
function reset(){
    inputButton.value=null;
    span.innerHTML=0;

}