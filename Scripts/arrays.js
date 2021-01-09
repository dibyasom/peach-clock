const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(digits.length);
// console.log(digits.join("***"));

let developers = [
  { name: "Dibyasom", stack: "Frontend" },
  { name: "Dev", stack: "DBMS" },
];
developers.push({ name: "Sayansree", stack: "backend" });

// console.log(developers);

//Methods are functions intended for objects.
developers.forEach(function (dev, index) {
  console.log(index, dev);
});
