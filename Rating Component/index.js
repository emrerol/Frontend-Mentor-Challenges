const btn = document.getElementsByClassName("button")[0];
const one = document.getElementsByClassName("rate-holder-container")[0];
const two = document.getElementsByClassName("thank-you-container")[0];
const rateText = document.getElementsByClassName("rate-text-container")[0];
const myOrange = "#fb7413";
const myMediumGray = "#363C45";
const rateSelects = document.querySelectorAll(".rating");
let selectedRate;

const makeGray = () => {
  rateSelects.forEach((element) => {
    element.style.backgroundColor = myMediumGray;
  });
};

rateSelects.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    if (e.target.id === "1") {
      makeGray();
      selectedRate = e.target.innerText;
      e.target.style.backgroundColor = myOrange;
    } else if (e.target.id === "2") {
      makeGray();
      selectedRate = e.target.innerText;
      e.target.style.backgroundColor = myOrange;
    } else if (e.target.id === "3") {
      makeGray();
      selectedRate = e.target.innerText;
      e.target.style.backgroundColor = myOrange;
    } else if (e.target.id === "4") {
      makeGray();
      selectedRate = e.target.innerText;
      e.target.style.backgroundColor = myOrange;
    } else if (e.target.id === "5") {
      makeGray();
      selectedRate = e.target.innerText;
      e.target.style.backgroundColor = myOrange;
    }
  });
});

btn.addEventListener("click", function () {
  if (selectedRate == undefined) {
    alert("Please select a rate");
    return;
  }
  one.style.visibility = "hidden";
  two.style.visibility = "visible";
  rateText.innerText = "You selected " + selectedRate + " out of 5";
});

