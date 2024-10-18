let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let para = document.querySelector('p');

btn.addEventListener('click', function() {
    let colour = changecolor();
    h3.innerText=colour;
    para.style.backgroundColor=colour;
});



function changecolor() {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    
   return `rgb(${red}, ${green}, ${blue})`;
}