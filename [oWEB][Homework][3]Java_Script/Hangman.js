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

var numFalseGuesses = 0;
var numMaxGuesses = 5;

function setImage() { //js for the picture change
    if (numFalseGuesses <= numMaxGuesses) {
        iconImg = document.getElementById("hangmanPic");
        iconImg.setAttribute("src", "resourses/pictures/hangman" + numFalseGuesses + ".png");
        iconImg.setAttribute("alt", "hangman" + numFalseGuesses);
    }
}
//making a array
var wordArray = new Array("doge", "process", "integer", "test", "lines", "gray", "timer", "seconds", "hangman", "stickman", "repeat", "reserved", "minutes", "progress", "guess", "statemen", "google", "eighteen", "ninety", "effect");
var wordNum = wordArray.length;
var wordToBeGuessed = wordArray[Math.floor(Math.random() * wordNum)];

var wordLenght = wordToBeGuessed.length;
var wordLetterByLetter = wordToBeGuessed.split("");
var playAgain;
//document.writeln(wordToBeGuessed);
//document.writeln(wordLenght);

function submitForms() { //buttonOnClick

    var te = testTrue();
    if (te) {
        playAgain = window.confirm("You won the game, in " + minutes + " minutes and " + seconds + " seconds,  try again");
        if (playAgain) setTimeout(function () { location.reload(); }, 500);

    } else {
        numFalseGuesses++;
    }
    setImage();
    document.getElementById("guesses").innerHTML = numMaxGuesses - numFalseGuesses;
    if (numFalseGuesses >= 5) {
        playAgain = window.confirm("You lost the game, in " + minutes + " minutes and " + seconds + " seconds,  try again");
        if (playAgain) setTimeout(function () { location.reload(); }, 500);
    }
}

// function submitForms() { //old try not working

//     setImage();
//     document.getElementById("guesses").innerHTML = numMaxGuesses - numFalseGuesses;
//     if (numFalseGuesses >= 5) {
//         window.alert("You lost the game");
//         window.location.reload();
//     } else {
//         var testerBeforeSplit = window.getElementById("textInput").value;
//         var tester = testerBeforeSplit.split("");
//         if (tester.length == wordLenght) {
//             for (var i = 0; i < wordLenght; i++) {
//                 if (tester[i] != wordLetterByLetter[i]) {
//                     numFalseGuesses++;
//                 break;
//             }
//             continue;
//         }
//     }else {
//         numFalseGuesses++;
//     }

//     //
//     //if
//     window.alert("You won the game, try again");
//     window.location.reload();
// }
// end of old try
//test true

// function testTrue() { //option one with one line submit --  check if the imput and the word to be quessed are the same
//     var textInput = document.getElementById("textInput");
//     var textInputLetterByLetter = textInput.value.split("");
//     if (textInputLetterByLetter.length != wordLenght) { // check if the char nums are equal
//         // document.getElementById("toast").innerHTML="character count not equal";
//         textInput.value = "Character count not equal";
//         return false;
//     }
//     for (var i = 0; i < wordLenght; i++) {
//         if (wordLetterByLetter[i] != textInputLetterByLetter[i]) {
//             textInput.value = "false";
//             return false;
//         }
//     }
//     textInput.value = "true";
//     return true;
// }

function testTrue() { // option 2 check if the imput and the word to be quessed are the same
    for (var i = 0; i < wordLenght; i++) {
        if (i != num1 && i != num2 && i != num3) {
            var let = document.getElementById('letter' + i).value;
            if (wordLetterByLetter[i] != let) {
                //  textInput.value = "letter" + i; // for testing purpuses
                for (var j = 0; j < wordLenght; j++) {
                    if (j != num1 && j != num2 && j != num3) {
                        var clear = document.getElementById('letter' + j);
                        clear.value = '';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

//generate 3 random numbers
var num1 = Math.floor(Math.random() * wordLenght);
var num2 = Math.floor(Math.random() * wordLenght);
var num3 = Math.floor(Math.random() * wordLenght);

while (num1 == num2) { //ensure 1 and 2 are different
    num2 = Math.floor(Math.random() * wordLenght);
}

while (num1 == num3 || num2 == num3) { // ensure that all are different
    num3 = Math.floor(Math.random() * wordLenght);
}

var wordTable = "";
for (var i = 0; i < wordLenght; i++) {//initialise table
    if (i == num1 || i == num2 || i == num3)
        wordTable += "<td>" + wordToBeGuessed[i] + "</td>";
    else {
        // wordTable += "<td> <p>*</p> </td>"; // for option 1
        wordTable += '<td> <input type="text" id="letter' + i + '" size="1" maxlength="1"> </td>'; //for option 2
    }
}
//update table on page loading loading
window.addEventListener("load", start, false);

function start() {
    document.getElementById("letters").innerHTML = wordTable;
}







