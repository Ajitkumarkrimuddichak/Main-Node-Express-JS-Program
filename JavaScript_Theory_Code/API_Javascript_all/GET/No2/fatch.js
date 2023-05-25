//Async and Await used
document.getElementById("btn").addEventListener("click", ajit);

/*async function ajit() {
  console.log("Button Clicked");
  const res = await fetch("data.txt");
  console.log(res);
  const data = await res.text();
  console.log(data);
}*/

//or Error handling
/*async function ajit() {
  try {
    console.log("Button Clicked");
    const res = await fetch("data1.txt");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}*/

//or showing Data in Browser
async function ajit() {
  try {
    console.log("Button Clicked");
    const res = await fetch("data.txt");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.text();
    console.log(data);
    document.getElementById("divdata").innerHTML = data;
  } catch (error) {
    console.log(error);
  }
}
