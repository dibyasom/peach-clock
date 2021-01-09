function colorShift(state, boxes, materialColors, colorShiftButton, body) {
  //Enagage!!
  let btColor, btText, bodyBg, shadowColor, pColor;
  if (state) {
    btColor = "black";
    btText = "white";
    bodyBg = "#051821";
    shadowColor = "rgba(199 234 70 0.5)";
    pColor = "#1a4645";
  } else {
    btColor = " #f9f5ec";
    btText = "black";
    bodyBg = "#f9f5ec";
    materialColors = ["#5c6bc0", "#5c6bc0", "#5c6bc0", "#5c6bc0"];
    shadowColor = "rgba(197 174 145 0.5)";
    pColor = "white";
  }

  boxes.forEach(function (box, index) {
    box.style.backgroundColor = materialColors[index];
    box.style.color = pColor;
    box.style.boxShadow = `10px 10px 10px ${shadowColor}`;
  });

  colorShiftButton.style.backgroundColor = btColor;
  colorShiftButton.style.color = btText;
  body.style.backgroundColor = bodyBg;
}

//event-listener
colorShiftButton = document.querySelector(".color-shift-button");
const boxes = document.querySelectorAll(".box");
const materialColors = ["#7086eb", "#f5e36d", "#f0b1ba", "#65b37b"];
const body = document.querySelector("body");
state = false;

colorShiftButton.addEventListener("click", function () {
  state = !state;
  console.log(state);
  colorShift(state, boxes, materialColors, colorShiftButton, body);
});
