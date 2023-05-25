document.getElementById("btn").addEventListener("click", ajit);

//Axios Instance
const ai = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//Get Request
/*function ajit() {
  console.log("Button Clicked");
  ai("/posts/1") //own object create
    .then((res) => {
      console.log("Data :", res.data);
      console.log("ID :", res.data.id);
      console.log("Title :", res.data.title);
      console.log("Body :", res.data.body);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

function ajit() {
  console.log("Button Clicked");
  ai("/posts/") //change url
    .then((res) => {
      console.log("Data :", res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
