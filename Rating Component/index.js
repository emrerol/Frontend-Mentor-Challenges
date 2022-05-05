const btn = document.getElementsByClassName("button")[0];
const one = document.getElementsByClassName("rate-holder-container")[0];
const two = document.getElementsByClassName("thank-you-container")[0];
const rateText = document.getElementsByClassName("rate-text-container")[0];
const myOrange = "fb7413";
const rateSelects = document.querySelectorAll(".rating");
let selectedRate;

rateSelects.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#" + myOrange;
    selectedRate = e.target.innerText;
  });
});

btn.addEventListener("click", function () {
  one.style.visibility = "hidden";
  two.style.visibility = "visible";

  rateText.innerText = "You selected " + selectedRate + " out of 5";
});
