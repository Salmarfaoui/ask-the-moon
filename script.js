// var button = document.getElementsByTagName("button")[0];
// var image = document.getElementsByTagName("img")[0];
// button.addEventListener("click", slid, false);
// function slid(e) {
//   image.src = "moon.png";
//   image.style.display = "block";
//   image.style.transform = "rotate(180deg)";
// } //add this
var answers = [
  "yes",
  "no",
  "Maybe",
  "hell no",
  "if you're in luck",
  "you have a zero chance my friend",
  "ABSOLUTELY!!",
  "just give up , you're hopeless...",
  " i am unable to answer",
  "...",
];

// const moon = document.getElementById("img");
// console.log(moon);
// moon.addEventListener("click", function () {
//   const random = Math.floor(Math.random() * answers.length);
//   for (i = 0; i < 10; i++) {
//     console.log(random, answers[random]);

//   }
//   return (document.getElementById("answer").innerHTML = answers[random]);
// });

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  btn.disabled = true;
  const random = Math.floor(Math.random() * answers.length);
  for (i = 0; i < 10; i++) {
    console.log(random, answers[random]);
    document
      .querySelector(".flip-card-inner")
      .classList.add("flip-card-innerrot");
  }
  return (document.getElementById("answer").innerHTML = answers[random]);
});
const bttnn = document.getElementById("bttnn");
bttnn.addEventListener("mouseout", function () {
  document
    .querySelector(".flip-card-inner")
    .classList.remove("flip-card-innerrot");
  btn.disabled = false;
  return (document.getElementById("answer").innerHTML = "");
});
