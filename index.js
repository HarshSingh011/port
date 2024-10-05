let image = document.getElementById("Img");
setInterval(function(){
    let random = Math.floor((Math.random()*21)+1);
    console.log(random);
    if( random == 1){
        image.style.width="32rem";
    }else if (random == 2){
        image.style.width="38rem";
    }else if (random == 5){
        image.style.width="38rem";
    }else if (random == 6){
        image.style.width="38rem";
    }
    else if (random == 9){
        image.style.width="38rem";
    }
    image.src="./views/Gallery/my"+random+".jpg";
    // image.style.transition="1s";
},3000);

function showMenu(){
    console.log("hello");
    let dropdown = document.querySelector(".dropdown-menu");
    let check = dropdown.classList.contains('show');
    if(check){
        dropdown.classList.remove('show');
    }else{
        dropdown.classList.add('show');
    }
}

document.querySelector(".menu").addEventListener("click",()=>{
    let dropdowns = document.querySelector(".dropdown-menu");
    let check = dropdowns.classList.contains('show');
    console.log(check);
    if(check){
        dropdowns.classList.remove('show');
        console.log(dropdowns);
    }
})
