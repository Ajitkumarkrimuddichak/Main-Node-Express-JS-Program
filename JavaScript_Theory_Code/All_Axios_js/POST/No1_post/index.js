document.getElementById("btn").addEventListener("click", ajit);

//Promise Then
/*function ajit() {
  console.log("Button Clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: '{"name":"Ajit kumar","job":"web Develpment"}',
  };
  axios(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or short hand Promise Then
/*function ajit() {
  console.log("Button Clicked");
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(
      "https://reqres.in/api/users",
      '{"name":"Ajit kumar","job":"web Develpment"}',
      config
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or short hand Promise Then
/*function ajit() {
  console.log("Button Clicked");
  (url = "https://reqres.in/api/users"),
    (data = '{"name":"Mukul kumar","job":"web Develpment"}');
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(url, data, config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//Async And Await
/*async function ajit() {
  try {
    console.log("Button Clicked");
    const config = {
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: '{"name":"Ajit kumar","job":"web Develpment"}',
    };
    const res = await axios(config);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}*/

//shot hand Async And Await
async function ajit() {
  try {
    console.log("Button Clicked");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://reqres.in/api/users",
      '{"name":"mukul kumar","job":"web Develpment"}',
      config
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
