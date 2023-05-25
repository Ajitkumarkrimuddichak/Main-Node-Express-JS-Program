document.getElementById("btn").addEventListener("click", ajit);

//Global Axios Default
axios.defaults.headers.common["Authorization"] =
  "ajitkumarpatnabiharnaladasarasvatima";

//Get Request
/*function ajit() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts/1")
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

//Post Request
function ajit() {
  console.log("Button Clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: '{"name":"Ram","job":"MERN"}',
  };
  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
