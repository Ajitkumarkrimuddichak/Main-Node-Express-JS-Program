document.getElementById("btn").addEventListener("click", ajit);

/*function ajit() {
  console.log("Button Clicked");
  const proj = fetch("data.txt");
  console.log(proj);
  proj
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    });
}*/

//or direct fetch me then lagaya
/*function ajit() {
  console.log("Button Clicked");
  fetch("data.txt")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    });
}*/

//or Error hendling
/*function ajit() {
  console.log("Button Clicked");
  fetch("data1.txt") //Error check ke liye likha
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or Showing Data in browser
function ajit() {
  console.log("Button Clicked");
  fetch("data.txt")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("divdata").innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
    });
}
