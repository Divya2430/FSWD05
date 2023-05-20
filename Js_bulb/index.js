const button = document.querySelector('button');
const img= document.querySelector('img');
// console.log(button);
//console.log(img.src);
//img.src="./images/onbulb.png"

const body=document.querySelector('body');


button.addEventListener("click",()=>{
    if(button.innerText==='On'){
        img.src="./images/onbulb.png"
        button.innerText="Off";
        body.style.backgroundColor='white';
    }
    else
    {
     img.src="./images/offbulb.png"
     button.innerText="On";
     body.style.backgroundColor='black';
    }
    
})