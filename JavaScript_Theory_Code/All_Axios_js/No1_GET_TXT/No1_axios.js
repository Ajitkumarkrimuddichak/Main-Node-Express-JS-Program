document.getElementById("btn").addEventListener("click", makerequest);

/*function makerequest() {
  console.log("Button Clicked");
  config = {
    method: "get",
    url: "No1_data.txt",
  };
  const promiseObj = axios(config);
  promiseObj.then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or
/*function makerequest() {
  console.log("Button Clicked");
  config = {
    method: "get",
    url: "No1_data.txt",
  };
  axios(config).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or
/*function makerequest() {
  console.log("Button Clicked");
  axios({
    method: "get",
    url: "No1_data.txt",
  }).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or short hand
/*function makerequest() {
  console.log("Button Clicked");
  axios.get("No1_data.txt").then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or short hand
/*function makerequest() {
  console.log("Button Clicked");
  axios("No1_data.txt").then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or short hand
/*function makerequest() {
  console.log("Button Clicked");
  axios("No1_data.txt", { method: "get" }).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//or short hand
/*function makerequest() {
  console.log("Button Clicked");
  config = {
    method: "get",
  };
  axios.get("No1_data.txt", config).then((res) => {
    console.log(res);
    console.log(res.data);
  });
}*/

//Promise Then | Error Handling
/*function makerequest() {
  console.log("Button Clicked");
  axios
    .get("No1_data1.txt")
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      //not used axios me catch ke bad then nahi likha jata hai
      console.log("Clean yah then nahi likhe to achh hai");
    });
}*/

//Promise Then | Showing Data in Browser
/*function makerequest() {
  console.log("Button Clicked");
  axios
    .get("No1_data.txt")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      document.getElementById("divdata").innerText = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//Async and Await function used
/*async function makerequest() {
  console.log("Button Clicked");
  config = {
    method: "get",
    url: "No1_data.txt",
  };
  const res = await axios(config);
  console.log(res);
  console.log(res.data);
}*/

//or Async and Await function used
/*async function makerequest() {
  console.log("Button Clicked");
  config = {
    method: "get",
  };
  const res = await axios("No1_data.txt", config);
  console.log(res);
  console.log(res.data);
}*/

//or Async and Await function used
/*async function makerequest() {
  console.log("Button Clicked");
  const res = await axios.get("No1_data.txt");
  console.log(res);
  console.log(res.data);
}*/

//Async and Await | Error Handling
/*async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios.get("No11_data.txt");
    console.log(res);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}*/

//Async and Await | Showing Data in Browser
async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios.get("No1_data.txt"); //get defoult hota hai
    console.log(res);
    console.log(res.data);
    document.getElementById("divdata").innerText = res.data;
  } catch (error) {
    console.log(error);
  }
}
