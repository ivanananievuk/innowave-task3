let more = document.getElementsByClassName("more");
let cont = document.getElementsByClassName("cont");


for( let i in more){
    console.log(i)
}


//function Call(){
//cont[0].classList.toggle("active");
//}




for(let x=0; x<more.length; x++){
    more[x].addEventListener("click", ()=>{
        cont[x].classList.toggle("active");
        more[x].classList.toggle("active");

    })

}


form = document.getElementById("form");
form.addEventListener("submit", ()=>{
    alert("Thank you! You message has been submited.")
})



let elm = document.getElementById("horsi");
let shift = 1;


function decider(){
    if(shift == 1){
        elm.style.backgroundImage = "url('./animals/horsi.png')"
    }
    if(shift ==2){
        elm.style.backgroundImage = "url('./animals/horsi2.png')"

    }
    if(shift ==3){
        elm.style.backgroundImage = "url('./animals/horsi3.png')"

    }
}


function calculator(){

    if(shift == 4){
        shift = 1;
    }

    decider();
    

}








elm.addEventListener("click", ()=>{
    shift ++;
    calculator()
    
    
})

elm.style.backgroundImage = "url('./animals/horsi.png')"
