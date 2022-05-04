const btn = document.getElementsByClassName("button")[0];
console.log(btn);
const one = document.getElementsByClassName("rate-holder-container")[0];
console.log(one);
const two = document.getElementsByClassName("thank-you-container")[0];
console.log(two);

btn.addEventListener("click", function () {
  one.style.visibility = "hidden";
  two.style.visibility = "visible";
});
