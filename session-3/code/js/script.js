// selector
console.log(document.getElementById("sample"));
console.log(typeof document.getElementById("list"));

console.log(document.getElementsByClassName("list-item"));
// document.getElementsbyTagname()

// querySelector(css selector) and querySelectorAll()
console.log(document.querySelector("#list")); //#select 1 element
console.log(document.querySelector(".list-item"));

console.log(typeof document.querySelector(".list-item"));
console.log(document.querySelectorAll(".list-item"));

// changing content
document.querySelector("#sample").innerHTML = "<i>Hello! World</i>";
document.querySelector("#sample").textContent = "Hello! World";

console.log(document.querySelector(".list-item").textContent);

//iterate over collection data
let items = document.querySelectorAll(".list-item");

items.forEach((item) => {
  console.log(item.textContent);
});

changeStyle = () => {
  // manipulate css
  document.querySelector("#sample").style.color = "blue";
  document.querySelector("#sample").style.fontSize = "20px";

  let classes = document.querySelector("#ele").classList;
  console.log(classes);

  classes.add("card");
  classes.remove("card");
};

// creating & updating
addElement = () => {
  let div = document.createElement("div"); //<div>/div> (object)
  div.textContent = "We are learning DOM today!"; //<div>We are learning DOM today!</div>
  div.style.color = "teal"; //<div style="color: teal "></div>
  document.querySelector("main section:first-child").appendChild(div);

  document.querySelector("main section:last-child").remove();
};

document.querySelector("#add").addEventListener("click", addElement);

document.querySelector("#sample").addEventListener("click", function () {
  console.log(this); //
});

document.querySelector("#firstname").addEventListener("input", function (e) {
  // e -> event object , automatically get created.
  console.log(e.target.value);
  console.log(this.value);
});

function add() {
  // this is referring to owner object of function
  console.log(this); //referring to some objects
}

add();

// User Events
// onKeyUp
// onKeyDown
// OnClick
// onDbClick
// onChange
// onInput
// onMouseOver
// onMouseIn
// onMouseOut
// onFocus
// onBlur
// onSubmit

// Browser Events
// onload
// DOMContentLoaded
