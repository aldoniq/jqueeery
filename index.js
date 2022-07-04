var audio = new Audio("jquery.mp3");

$(document).ready(function() {
    if (localStorage.getItem("jqueeery") == null){
        $("#counter").html("Вы нажали: " + 0)
    } else {
        $("#counter").html("Вы нажали: " + localStorage.getItem("jqueeery"))
    }

})

async function ballSh() {
    var photo =  document.getElementById('photo').classList
    

    photo.toggle("shake");

    setTimeout(function() {
        photo.remove("shake");
    }, 2000);
}

function delay(ms) {
    const date = Date.now();
    let currentDate = null;
 
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}
$( "#photo" ).click(function() {
    
    audio.play();
    if (localStorage.getItem("jqueeery") === null) {
        localStorage.setItem("jqueeery",1)
    } else {
        localStorage.setItem("jqueeery",parseInt(localStorage.getItem("jqueeery"))+1)
    }

    ballSh()
    $("#counter").html("Вы нажали: " + localStorage.getItem("jqueeery"))
});

