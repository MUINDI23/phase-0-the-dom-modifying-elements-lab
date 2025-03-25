// Write your code here!
// Remove <main> element
document.querySelector('main#main').remove();

//create a new <h1> Element
const newHeader = document.createElement("h1");

//set id for <h1></h1>
newHeader.id = "victory";

//set content of newHeader
newHeader.textContent = "Samuel is the champion";
document.body.appendChild(newHeader);
