const plusbtn = document.querySelector(".plus button"); 
const minusbtn = document.querySelector('.minus button'); 
const number = document.querySelector('.number h6'); 
const reset = document.querySelector('.reset button');
const error = document.querySelector(".error h3") 
let counter = 0; 

const updateCounter = (x) =>{
    number.innerHTML = x; 
}

plusbtn.addEventListener("click", ()=>{
   
    counter = counter + 1;
    error.style.display = "none"; 
    updateCounter(counter); 
})
minusbtn.addEventListener("click", ()=>{
    if(counter === 0){
        document.querySelector(".error").style.display = "block"
       setTimeout(document.querySelector(".error").style.display = "none" ,2000);

       counter = 0; 
       updateCounter(counter); 
    }
    else{
        counter = counter - 1; 
        error.style.display = "none";
        updateCounter(counter); 

    }
    
}); 

reset.addEventListener("click", ()=>{
     counter = 0; 
     error.style.display = "none";
    updateCounter(counter);
})

