let buttons = document.querySelectorAll(".drum").forEach(setEventListener);

function setEventListener(button){
    button.addEventListener("click", function(){
        alert("works!");
    });
}