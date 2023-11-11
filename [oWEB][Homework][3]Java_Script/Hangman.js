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

// image
var numFalseGuesses = 0;
var numMaxGuesses = 5;

function setImage() {
    if(numFalseGuesses<=numMaxGuesses){
    iconImg = document.getElementById("hangmanPic");
    iconImg.setAttribute("src", "resourses/pictures/hangman" + numFalseGuesses + ".png");
    iconImg.setAttribute("alt", "hangman" + numFalseGuesses);
    }
}
//making a array
var wordArray = new Array("Doge", "Process", "Integer", "Test", "Lines", "Gray", "Timer", "Seconds", "Hangman", "Stickman", "Repeat", "Reserved", "Minutes", "Progress", "Guess", "Statemen", "Google", "eighteen", "ninety", "effect");
var wordNum = wordArray.length;
var wordToBeGuessed = wordArray[Math.floor(Math.random() * wordNum)];

var wordLenght = wordToBeGuessed.length;
var wordLetterByLetter = wordToBeGuessed.split("");

document.writeln(wordToBeGuessed);
document.writeln(wordLenght);


//buttonOnClick
function submitForms(){
    numFalseGuesses++;
    setImage();
    document.getElementById("guesses").innerHTML=numMaxGuesses-numFalseGuesses;
}
//test true
function testTrue(){
    
}

//generate 3 random numbers
var num1 = Math.floor(Math.random() * wordLenght);
var num2 = Math.floor(Math.random() * wordLenght);

while(num1==num2){
    num2 = Math.floor(Math.random() * wordLenght);
}//ensure 1 and 2 are different

var num3 = Math.floor(Math.random() * wordLenght);
while(num1==num3 || num2==num3){
    num3 = Math.floor(Math.random() * wordLenght);
}// ensure that all are different

//initialise table
var wordTable="";
for (var i = 0; i < wordLenght; i++) {
    if(i==num1||i==num2||i==num3)
    wordTable += "<td>" + wordToBeGuessed[i] + "</td>";
    else{
        wordTable += "<td> <p>*</p> </td>";
    }
}
//update table on page loading loading
window.addEventListener("load", start, false);

function start() {
    document.getElementById("letters").innerHTML= wordTable;
}







