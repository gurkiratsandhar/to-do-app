let myarray = [];
let myArray = [];

const functionSix = (e) => {
  const parent = e.target.parentNode;
  parent.replaceChildren("");
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  parent.appendChild(inputField);
  const btn2 = document.createElement("button");
  btn2.setAttribute("type", "submit");
  btn2.classList.add("green");
  btn2.textContent = "Submit";
  parent.appendChild(btn2);
  btn2.addEventListener("click", () => {
    const div = document.createElement("div");
    const divOne = document.createElement("div");
    const btn4 = document.createElement("button");
    btn4.innerHTML = "X";
    divOne.innerHTML = inputField.value;
    divOne.addEventListener("click", functionSeven);
    div.appendChild(divOne);
    div.appendChild(btn4);
    btn4.addEventListener("click", functionFive);
    sideDisplay.appendChild(div);
    parent.replaceChildren(project);
  });
  const btn1 = document.createElement("button");
  btn1.classList.add("red");
  btn1.textContent = "Cancel";
  parent.appendChild(btn1);
  btn1.addEventListener("click", () => {
    parent.replaceChildren(project);
  });
};

const functionSeven = (e) => {
  displayOne.textContent = e.target.innerHTML;
  displayTwo.replaceChildren("");
  const btn = document.createElement("button");
  btn.classList.add("mainbtn");
  btn.textContent = "+ Add Task";
  displayTwo.appendChild(btn);
  const mainbtn = document.querySelector(".mainbtn");
  mainbtn.addEventListener("click", functionEight);
};

const functionTwo = (e) => {
  displayTwo.replaceChildren("");
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  displayTwo.appendChild(inputField);
  const btn2 = document.createElement("button");
  btn2.setAttribute("type", "submit");
  btn2.classList.add("green");
  btn2.textContent = "Submit";
  displayTwo.appendChild(btn2);
  btn2.addEventListener("click", () => {
    const div = document.createElement("div");
    const divOne = document.createElement("div");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");
    btn3.innerHTML = "No date";
    btn4.innerHTML = "X";
    divOne.innerHTML = inputField.value;
    div.appendChild(divOne);
    div.appendChild(btn3);
    btn3.addEventListener("click", functionFour);
    div.appendChild(btn4);
    btn4.addEventListener("click", functionFive);
    displayThree.appendChild(div);
    myarray.push(div);
    functionThree();
  });
  const btn1 = document.createElement("button");
  btn1.classList.add("red");
  btn1.textContent = "Cancel";
  displayTwo.appendChild(btn1);
  btn1.addEventListener("click", functionThree);
};

const functionFive = (e) => {
  myarray.forEach((child) => {
    if (child == e.target.parentNode) {
      const index = myarray.indexOf(child);
      myarray.splice(index, 1);
    }
  });
  console.log(e.target.parentNode);
  e.target.parentNode.replaceChildren("");
};

const functionFour = (e) => {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "date");
  e.target.replaceChildren(inputField);
  e.target.removeEventListener("click", functionFour);
};

const functionThree = () => {
  displayTwo.replaceChildren("");
  const btn = document.createElement("button");
  btn.classList.add("mainbtn");
  btn.textContent = "+ Add Task";
  displayTwo.appendChild(btn);
  const mainbtn = document.querySelector(".mainbtn");
  mainbtn.addEventListener("click", functionTwo);
};

const functionOne = (e) => {
  displayOne.textContent = e.target.innerHTML;
  displayTwo.replaceChildren("");
  if (e.target.innerHTML == "Inbox") {
    functionThree();
    myarray.forEach((child) => {
      displayThree.appendChild(child);
    });
  } else if (e.target.innerHTML == "Today") {
    displayThree.replaceChildren("");
    let todayDate = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${new Date().getDate()}`;
    myarray.forEach((child) => {
      if (child.children[1].children[0].value == todayDate) {
        displayThree.append(child);
      }
    });
  } else {
    displayThree.replaceChildren("");
    myarray.forEach((child) => {
      var dateVar = new Date(child.children[1].children[0].value);
      var thisWeek = new Date().getWeek();
      if (dateVar.getWeek() == thisWeek) {
        displayThree.append(child);
      }
    });
  }
};

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

const sideDisplay = document.querySelector(".sideDisplay");
const project = document.querySelector(".sub");
project.addEventListener("click", functionSix);
const displayThree = document.querySelector(".displayThree");
const displayTwo = document.querySelector(".displayTwo");
const displayOne = document.querySelector(".displayOne");
const sidebtns = document.querySelectorAll(".sidebtn");
sidebtns.forEach((sidebtn) => {
  sidebtn.addEventListener("click", functionOne);
});
