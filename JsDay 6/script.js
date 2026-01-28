//-------------------------------------------------SELECTING ELEMENT BY ID-----------------------------------------------------//
const headingelement=document.getElementById("heading");
console.log(headingelement);

headingelement.textContent="new heading";
headingelement.style.color="red";
headingelement.style.backgroundColor="black";

//select the first <P> elemet inside the div with id "content"
const paragraph=document.getElementById("content p");
//change the text element of the selected paragraph
paragraph.textContent="this para  has been updated using query selector by id";
//change the color of the paragraph text to blue
paragraph.style.color="blue";
//select and modify the <h1>element inside the content div
const heading=document.querySelector("#content h1");
heading.textContent="This is updated heading using query selector by id";
//change the style of the selected paragraph
heading.style.color="green";