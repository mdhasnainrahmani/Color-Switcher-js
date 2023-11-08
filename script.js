let body = document.querySelector("body");
let bulbe = document.getElementById("img")

grey.addEventListener("click",()=>{
 bulbe.src = "./offBulbe.png"
//  bulbe.style.backgroundColor = "red"
});
red.addEventListener("click",()=>{
    bulbe.src = "./red.png"
});
blue.addEventListener("click",()=>{
    bulbe.src = "./blue.png"
});
yellow.addEventListener("click",()=>{
    bulbe.src = "./yellow.png"
});