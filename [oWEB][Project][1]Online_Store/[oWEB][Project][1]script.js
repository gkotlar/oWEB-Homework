function setImage() { //js for the picture change
    if (numFalseGuesses <= numMaxGuesses) {
        iconImg = document.getElementById("hangmanPic");
        iconImg.setAttribute("src", "resourses/pictures/hangman" + numFalseGuesses + ".png");
        iconImg.setAttribute("alt", "hangman" + numFalseGuesses);
    }
}
// window.addEventListener("click", start, false);

function start() {
    let person = prompt("Please enter your username", "Harry ");
    let pass = prompt("Please enter your password", " Potter");
}
var counter = 0;
function heartchange() {
    if (document.getElementById("Heart1").src == "Resourses/heartEmpty.png") {
        document.getElementById("Heart1").src = "Resourses/heartFull.png";
    }
    else {
        document.getElementById("Heart1").src = "Resourses/heartEmpty.png";
    }
}
