/* ----------------- select the drums button to add an event ---------------- */
let button_of_drums_array=document.querySelectorAll(".drum")

/* --------------------------- add sound on press --------------------------- */

for(let i=0; i<button_of_drums_array.length ;i++){
    button_of_drums_array[i].addEventListener("click",function(){
       var button_innerHTML=this.innerHTML;
       make_sound(button_innerHTML);
       add_animation(button_innerHTML)
   })
}

/* ---------------------- add sound when keyboard press --------------------- */

document.addEventListener("keypress",function(event){
  make_sound(event.key);
  add_animation(event.key)
})


function make_sound(key){
    switch (key) {
        case "w":
             var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
             break;
         case "a":
             var audio = new Audio('sounds/tom-2.mp3');
             audio.play();
             break;
         case "s":
             var audio = new Audio('sounds/tom-3.mp3');
             audio.play();
             break;
         case "d":
             var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
             break;
         case "j":
             var audio = new Audio('sounds/snare.mp3');
             audio.play();
             break;
         case "k":
             var audio = new Audio('sounds/crash.mp3');
             audio.play();
             break; 
         case "l":
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();  
             break; 
        default:
            console.log(button_innerHTML)
            break;
    }

}
function add_animation(key){
    var active_button = document.querySelector("."+key);
    active_button.classList.add("pressed");
    setTimeout(function() {active_button.classList.remove("pressed");} ,100);
}