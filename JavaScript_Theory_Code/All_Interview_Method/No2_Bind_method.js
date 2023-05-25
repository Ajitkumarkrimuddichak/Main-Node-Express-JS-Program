/*const bindMethod = {
  name: "Ajit kumar",
  content: "mern stack",
  feature: function () {
    console.log(
      `my fav method name is ${this.name}. He made videos on ${this.content} topic.`
    );
  },
};
//bindMethod.feature(); //Simple used
let bindMethodFun = bindMethod.feature.bind(bindMethod);
bindMethodFun();*/

//or
const you = { name: "Ajit kumar", content: "mern dev" };
const you1 = { name: "Ram kumar", content: "whatsapp dev" };
const you2 = { name: "mukul kumar", content: "devops dev" };

function features(rating) {
  console.log(
    `my fav name is ${this.name}. He made video on ${this.content} topics. i will love to give ${rating} star`
  );
}
let newfun = features.bind(you);
newfun(6);
let newfun1 = features.bind(you1);
newfun(5);
let newfun2 = features.bind(you2);
newfun(4);
