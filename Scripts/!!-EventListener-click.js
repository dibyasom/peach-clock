function colorShift() {
  const boxes = document.querySelectorAll(".box");
  materialColors = ["#7086eb", "#f5e36d", "#f0b1ba", "#65b37b"];
  // console.log(boxes);

  //Enagage!!
  boxes.forEach(function (box, index) {
    box.style.backgroundColor = materialColors[index];
  });
}

//event-listener
colorShiftButton = document.querySelector(".color-shift-button");
colorShiftButton.addEventListener("click", function () {
  //   alert("Color's bouta change!!");
  colorShift();
  colorShiftButton.style.backgroundColor = "black";
  colorShiftButton.style.color = "white";
  //   document.querySelector("body").style.backgroundColor("black");
});
