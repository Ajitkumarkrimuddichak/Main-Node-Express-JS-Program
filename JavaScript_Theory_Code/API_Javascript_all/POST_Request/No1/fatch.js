document.getElementById("btn").addEventListener("click", ajit);

//pormise Then used
/*function ajit() {
  console.log("Button Clicked");
  const myInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"name": "Ajit kumar","job": "Full Stack Developer"}',
  };
  fetch("https://reqres.in/api/users", myInit)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//Async and Await
async function ajit() {
  try {
    console.log("Button Clicked");
    const myInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"name":"mukul kumar","job":"MERN stack developer"}',
    };
    const res = await fetch("https://reqres.in/api/users", myInit);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
