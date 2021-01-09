function parseText(src, targets) {
  //   console.log(src.value);
  parsedText = src.value;
  if (parsedText === "") parsedText = "Who's the daddy?";
  targets.forEach(function (target) {
    target.innerText = parsedText;
  });
}

const copyHere = document.querySelectorAll(".copyhere");
const copyFrom = document.querySelector(".copyfrom");

copyFrom.addEventListener("keyup", function () {
  parseText(copyFrom, copyHere);
});
