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
    // return `${this.firstName}`;
    console.log(this.firstName);
  },
};

// console.log(me.getAddress());
me.getAddress();
