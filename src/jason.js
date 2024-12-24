let followUp = (event) => {
  event.preventDefault();
  let entry = document.querySelector("#monk");
  let showInput = entry.value.trim();
  alert(showInput.toUpperCase());
};

let eventAdd = document.querySelector(".friend");
eventAdd.addEventListener("submit", followUp);

let dateNo = new Date();

let dateFactor = dateNo.getDate();
console.log(dateFactor);
let dateElement = dateNo.getDay();

let weekDays = ["sun", "Mon", "Tue"];
let valueDay = weekDays[dateElement];
console.log(valueDay);
let selectD = document.querySelector(".dateD");
selectD.innerHTML = `${valueDay} ${dateFactor}`;

let months = ["jan", "feb", "mar", "Apr"];
let indices = [1, 2, 3, 4, 5];

months.forEach((value, index) => {
  let beetle = indices[index];
  let sudden = beetle + value;
  let famish = sudden.replace("jan", "sept");
  console.log(famish);
});
