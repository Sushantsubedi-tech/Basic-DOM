let ele1=document.querySelector("h1");//selection by tag name
// let ele1=document.querySelector(".first")//selection by class name
// let ele1=document.querySelector("#head")//selection by id name
ele1.style.color ="royalblue";
ele1.style.textTransform = "uppercase";
ele1.style.fontFamily = "Arial, sans-serif";
ele1.style.fontWeight = "bolder";
ele1.style.fontSize = "80px";
ele1.style.margin ="1rem"

let ele2 = document.querySelector(".heading")
ele2.style.display = "flex";
ele2.style.justifyContent = "center";
ele2.style.alignItems = "center";
ele2.style.flexDirection = "column"
//EVENT LISTENER

ele1.addEventListener("click",function(){
    ele1.style.color ="white";
    ele1.style.backgroundColor="black";
    
})//when ele1 is clicked this change occur
// ele1.addEventListener("mousemove",function(){
//     ele1.style.color ="white";
//     ele1.style.backgroundColor="orange";
    
// })//when mouse is moved in ele1 this change occur

ele1.addEventListener("mouseenter",function(){
    ele1.style.color ="white";
    ele1.style.backgroundColor="green";
    
}) //when mouse enter in the part of ele1 this change occur almost same as mousemove

ele1.addEventListener("mouseleave",function(){
    ele1.style.color ="white";
    ele1.style.backgroundColor="blue";
    
}) //when mouse leave from the part of ele1 this change occur

ele1.addEventListener("mouseout",function(){
    ele1.style.color ="white";
    ele1.style.backgroundColor="blue";
    
}) //when mouse is out from the part of ele1 this change occur 
// if else use 
// if(ele1.style.color == "royalblue"){
//     ele2.style.backgroundColor = "black"
// }
// else{
//     ele2.style.backgroundColor = "Red"
// }
//theme changing 
let theme = document.querySelector(".theme")
let dark = document.querySelector(".d")
let white = document.querySelector(".w")
let gray = document.querySelector(".g")

dark.addEventListener("click",function(){
    ele2.style.backgroundColor = "black"
     ele1.style.color ="white"
})
white.addEventListener("click",function(){
    ele2.style.backgroundColor = "white"
     ele1.style.color ="black"
})
gray.addEventListener("click",function(){
    ele2.style.backgroundColor = "grey"
    ele1.style.color ="black"
})
