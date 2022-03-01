var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("audio/audio_1.wav");
    audio.play();

    console.log(this.style.color ="white");
  });
}

//what to do whe click is detected
