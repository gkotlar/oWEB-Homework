
function start() {
    let person = prompt("Please enter your username", "Harry ");
    let pass = prompt("Please enter your password", " Potter");
}
var counter = 1;
var items = 9;
function heartchange(i) {
    iconImg = document.getElementById("Heart"+i);
    var sours = iconImg.getAttribute("src");
    if (sours == "Resourses/heartEmpty.png"){
        iconImg.setAttribute("src", "Resourses/heartFull.png");}
    else{
        iconImg.setAttribute("src", "Resourses/heartEmpty.png");}
}
function addComment(i) {
    send = document.getElementById("send"+i);
    text = document.getElementById("text"+i);

    com = text.value;

    document.getElementById("text"+i).value = '';

    const node = document.createElement("li");
    node.setAttribute("class", "comments");
    const textnode = document.createTextNode(com);
    node.appendChild(textnode);
    document.getElementById("ul"+i).appendChild(node);
}

