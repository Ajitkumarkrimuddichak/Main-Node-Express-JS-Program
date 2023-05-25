const you1 = {
  name: "Ajit kumar",
  content: "Programming",
  feature: function (rating, support) {
    console.log(`very friendly way of teaching. ${this.name}
    is my fav ${this.content} patna.I will love to give ${rating} star.
    Please ${support} ${this.name} marn. `);
  },
};
const you2 = {
  name: "kuchhbhi",
  content: "tech",
};
you1.feature.apply(you2, [5, "nsit"]);
