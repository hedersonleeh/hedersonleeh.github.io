const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myImage.onclick = ()=>
{
    const mySrc =myImage.getAttribute("src");
    if(mySrc === "Images/F6HZOdYbYAAeCJv.jpeg")
    {
        myImage.setAttribute("src","Images/Chipp_Guilty_Gear_Strive.webp");
    }
    else
    {
        myImage.setAttribute("src","Images/F6HZOdYbYAAeCJv.jpeg");
    }
}
if(!localStorage.getItem("name"))
{
    SetUser();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent =`Chipp is cool, ${storedName}`;
}

myButton.onclick = ()=>SetUser();
function SetUser()
{
    const myName = prompt("Please introduce your name.");
    localStorage.setItem("name",myName);
    myHeading.textContent =`Chipp is cool, ${myName}`;
}
