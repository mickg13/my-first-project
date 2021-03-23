const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function hasInput(){
	return input.value.length > 0;
} 

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""; 


	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	const dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (hasInput()) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (hasInput() && event.which ===13) {
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);