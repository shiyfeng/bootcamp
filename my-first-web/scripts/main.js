const myImage = document.querySelector("img");

myImage.onclick = ()=>{
    const mySrc =myImage.getAttribute("src");
    if(mySrc === "images/logo.svg"){
        myImage.setAttribute("src","images/liya.jpeg");
    } else {
        myImage.setAttribute("src","images/logo.svg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("请输入你的角色名：");
    localStorage.setItem("name", myName);
    myHeading.textContent = `你的名字真好听，${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName =localStorage.getItem("name");
    myHeading.textContent = `你的名字真好听，${storedName}`
}

myButton.onclick = function(){
    setUserName();
}