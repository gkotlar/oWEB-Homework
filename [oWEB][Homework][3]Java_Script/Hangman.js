// timer
var seconds = 0;
var minutes = 0;
function startTimer() {
    window.setInterval("updateTime()", 1000);
}

function updateTime() {
    ++seconds;
    document.getElementById("sec").innerHTML = seconds;
    if (seconds > 58) {
        seconds = seconds % 59;
        ++minutes;
        document.getElementById("min").innerHTML = minutes;
    }
}
window.addEventListener("load", startTimer, false);

//making a array
var wordArray = new Array("Doge","Process","Integer","Test","Lines","Gray","Timer","Seconds","Hangman","Stickman","Repeat","Reserved","Minutes","Progress","Guess","Statemen","Google","eighteen","ninety","effect");
var wordNum = wordArray.length;
var wordToBeGuessed = wordArray[Math.floor(Math.random()*wordNum)];
document.writeln(wordToBeGuessed);

var wordLenght = wordToBeGuessed.length;
var wordLetterByLetter = wordToBeGuessed.split("");



