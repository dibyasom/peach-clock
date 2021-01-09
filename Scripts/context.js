// this (context operator) in the global space refers to the current window.
console.log(this);

//Get scroll(pixel wise) position on the page.
console.log(this.screenY);
// console.log(this.setInterval());

const me = {
  name: {
    firstName: "Dibyasom",
    lastName: "Puhan",
  },
  location: {
    apartment: "OOO/4",
    city: "Rourkela",
    state: "Odisha",
  },
  getAddress() {
    return `${this.name.firstName} ${this.name.lastName} 
${this.location.apartment}, ${this.location.city}
${this.location.state}.`;
    // console.log(this.firstName);
  },
};

console.log(me.getAddress());
// me.getAddress();
