let button = document.querySelector("button");
let heading = document.querySelector("h1");
function buttonClick () {


    heading.innerHTML = `This is my first SASS tutorial`;

}


button.addEventListener("click" , buttonClick);