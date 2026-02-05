//-------------------CREATING ELEMENTS DYNAMICALLY--------------------------------------------------//
const para=document.createElement("p");
para.textContent="this is a dynamically added paragraph";
console.log(para);

//-------------------DYNAMICALLY ADDING ELEMENTS TO THE DOM--------------------------------------------------//  
document.getElementById("content").appendChild(para);

//-------------------REMOVING ELEMENTS FROM THE DOM--------------------------------------------------//
document.querySelector("#content p").remove();

//-------------------ADDING AN IMAGE TO THE DOM--------------------------------------------------//
const image = document.createElement("img");
image.src = "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg";
image.setAttribute("alt", "coding image");
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

//-------------------SELECTING CHILD ELEMENTS--------------------------------------------------//
const childparagraph = document.querySelector("#parent p");
const parentdiv = childparagraph.parentElement;
console.log(parentdiv.id); // Output: parent


