var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numOfDrumButtons; i++) {



document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonTextContent = this.className;

    switch (buttonTextContent) {
        case ("w drum"):
            var kick = new Audio("sounds/kick.wav");
            kick.play();
         break;

        case ("a drum"):
            var snare = new Audio("sounds/snare.wav");
            snare.play();
         break;

        case ("s drum"):
            var openhat = new Audio("sounds/hats-closed.wav");
            openhat.play();
         break;

        case ("d drum"):
            var hihats = new Audio("sounds/hats-open.wav");
            hihats.play();
         break;

        case ("i drum"):
            var ride = new Audio("sounds/ride.wav");
            ride.play();
         break;

        case ("j drum"):
            var crash = new Audio("sounds/crash.wav");
            crash.play();
         break;

        case ("k drum"):
            var tom1 = new Audio("sounds/tom1.wav");
            tom1.play();
         break;

        case ("l drum"):
            var tom2 = new Audio("sounds/tom2.wav");
            tom2.play();
         break;

        default:
            console.log(buttonTextContent);
    }
    buttonAnimation(buttonTextContent);

});

}



document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

    function makeSound (key) {


    switch (key) {
        case ("w"):
            var kick = new Audio("sounds/kick.wav");
            kick.play();
         break;

        case ("a"):
            var snare = new Audio("sounds/snare.wav");
            snare.play();
         break;

        case ("s"):
            var openhat = new Audio("sounds/hats-closed.wav");
            openhat.play();
         break;

        case ("d"):
            var hihats = new Audio("sounds/hats-open.wav");
            hihats.play();
         break;

        case ("i"):
            var ride = new Audio("sounds/ride.wav");
            ride.play();
         break;

        case ("j"):
            var crash = new Audio("sounds/crash.wav");
            crash.play();
         break;

        case ("k"):
            var tom1 = new Audio("sounds/tom1.wav");
            tom1.play();
         break;

        case ("l"):
            var tom2 = new Audio("sounds/tom2.wav");
            tom2.play();
         break;

        default:
            console.log(buttonTextContent);
    }

}

function buttonAnimation(currentKey) {

    var activeButton =document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100);
}


