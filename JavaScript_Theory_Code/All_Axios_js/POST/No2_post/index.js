document.getElementById("btn").addEventListener("click", ajit);

//Promise Then
/*function ajit(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  console.log("Button Clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ name: name, job: job }), //jo api me likha rahe key value vahi likhana haoi
  };
  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//Async And Await
async function ajit(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  try {
    // e.preventDefault();
    // let name = document.getElementById("name").value;
    // let job = document.getElementById("job").value;
    console.log("Button Clicked");
    const config = {
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ name: name, job: job }),
    };
    const res = await axios(config);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
