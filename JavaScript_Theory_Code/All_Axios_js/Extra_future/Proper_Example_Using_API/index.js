document.getElementById("btn").addEventListener("click", ajit);

//GET Request
function ajit() {
  console.log("Button Clicked");
  axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
    console.log(res);
    console.log(res.data.message);
    document.getElementById("image").setAttribute("src", res.data.message);
  });
}
