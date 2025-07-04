const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: solid 2px black; background-color: pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
newDiv.appendChild(h1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "Me too!";
newDiv.appendChild(paragraph2);

container.appendChild(newDiv);
