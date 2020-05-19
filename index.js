var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var drumButtonInnerHTML = this.innerHTML;

        switch (drumButtonInnerHTML) {
            case ("w"):
                var kick = new Audio("sounds/kick.wav");
                kick.play();
             break;

            case ("a"):
                var snare = new Audio('sounds/snare.wav');
                snare.play();
             break;
            case ("s"):
                var openhat = new Audio('sounds/hats-open.wav');
                openhat.play();
             break;

                default:
                break;
        }
    });

    }
