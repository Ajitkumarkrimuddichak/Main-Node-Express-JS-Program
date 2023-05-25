//Promise Then //Error handling
document.getElementById("btn").addEventListener("click", ajit);

/*function ajit() {
  console.log("Button Clicked");
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log("Res", res);
      const dt = res.json();
      console.log("DT", dt);
      return dt;
    })
    .then((data) => {
      console.log("Data", data);
      console.log(data.name);
      console.log(data.roll);
      console.log(data.address);
      console.loh(data.Higstdegree);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or Promise then showing data in browser
/*function ajit() {
  console.log("Button Clicked");
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("divdata1").innerHTML = data.name;
      document.getElementById("divdata2").innerHTML = data.roll;
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or Async and Await / showing Data in Browser
async function ajit() {
  try {
    console.log("Button Clicked");
    const res = await fetch("data.json");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.json();
    console.log(data);
    document.getElementById("divdata1").innerHTML = data.name;
    document.getElementById("divdata2").innerHTML = data.roll;
  } catch (error) {
    console.log(error);
  }
}
