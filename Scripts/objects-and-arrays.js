// objects = python dictionary.

const developer = {
  name: "Dibyasom Puhan",
  stack: "Frontend Dev, ML with SKlearn.",
  languages: "q-Basic, JAVA, C++, C, R, Python3, Javascript, HTML, CSS",
  OS: "Linux, Windows",

  details: {
    city: "Rourkela",
    state: "Odisha",
  },

  talk(name) {
    console.log(`Hello? ${name}`);
  },
};

console.log(developer.talk("Dibyasom"));
// console.log(developer.details);
