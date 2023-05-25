/*const you1 = {
  name: "Ajit kumar",
  content: "programming",
  feature: function () {
    console.log(
      `very friendly way of ${this.name}. is my fav ${this.content} patna.`
    );
  },
};
//you1.feature();
const you2 = {
  name: "mukul kumar",
  content: "Technical",
};
you1.feature.call(you2);*/

//or
const you1 = {
  name: "Ajitkumar",
  content: "programming",
  feature: function (rating, support) {
    console.log(
      `very friendly way of ${this.name} is my fav ${this.content} channel. I will love ${rating} star. Please ${support} ${this.name} patna`
    );
  },
};
const you2 = { name: "mukul singh", content: "technology" };
you1.feature.call(you2, 5, "mern");
