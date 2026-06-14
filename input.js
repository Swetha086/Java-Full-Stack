let greetings=["Good Morning","Good Afternoon","Good Evening","Good Night"];
let num=0;
function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerText = "Good_Afternoon";
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="/files/bulbon.jpeg";
}
function turn_off(){
    let light=document.getElementById("off");
    light.src="/files/bulboff.jpeg";
}
function Change_Colour()
{
    let colour = document.getElementsById("cap");
    colour.style.backgroundColour = "black";
     let text1 = document.getElementsById("data");
    text1.style.color = "white";
     let text2 = document.getElementsById("greet");
    text2.style.backgroundColour = "greet";
}