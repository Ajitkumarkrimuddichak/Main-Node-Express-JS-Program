document.getElementById("btn").addEventListener("click", makerequest);

//Promise the | Single Data
/*function makerequest() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      console.log(res);
      console.log("Data 👎", res.data);
      console.log("ID 👎", res.data.id);
      console.log("Title 👎", res.data.title);
      console.log("Body 👎", res.data.body);
    })
    .catch((err) => {
      console.log(err);
    });
}*/

//or Promise the | Single Data
/*function makerequest() {
  console.log("Button Clicked");
  config = {
    params: { id: 1 },
  };
  axios("https://jsonplaceholder.typicode.com/posts/", config)
    .then((res) => {
      console.log(res);
      console.log("Data 👎", res.data);
      console.log("Data[0] 👎", res.data[0]);

      console.log("ID 👎", res.data[0].id);
      console.log("Title 👎", res.data[0].title);
      console.log("Body 👎", res.data[0].body);
    })
    .catch((err) => {
      console.log(err);
    });
}*/

//Promise the | Single Data | Shwing Data in Browser
/*function makerequest() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      console.log("Data 👎", res.data);
      document.getElementById("pid").innerText = res.data.id;
      document.getElementById("title").innerText = res.data.title;
      document.getElementById("body").innerText = res.data.body;
    })
    .catch((err) => {
      console.log(err);
    });
}*/

//Promise the | Multiple Data
/*function makerequest() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("Data 👎", res.data);
      res.data.forEach((element) => {
        console.log("ID 👎", element.id);
        console.log("Title 👎", element.title);
        console.log("Body 👎", element.body);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}*/

//Promise the | Multiple Data | Sowing Data in Browser
/*function makerequest() {
  console.log("Button Clicked");
  axios("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("Data 👎", res.data);
      const output = document.getElementById("allpost");
      res.data.forEach((element) => {
        output.innerHTML += `
        <div>ID: ${element.id}</div>
        <div>Titale: ${element.title}</div>
        <div>Body: ${element.body}</div><hr>
        `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}*/

//Async And Await | Single Data
/*async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Data", res.data);
    console.log("ID :- ", res.data.id);
    console.log("Title :- ", res.data.title);
    console.log("Body :- ", res.data.body);
  } catch (error) {
    console.log(error);
  }
}*/

//Async And Await | Single Data | Showing Data in Browser
/*async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Data", res.data);
    document.getElementById("pid").innerText = res.data.id;
    document.getElementById("title").innerText = res.data.title;
    document.getElementById("body").innerText = res.data.body;
  } catch (error) {
    console.log(error);
  }
}*/

//Async And Await | Multipe Data
/*async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log("Data", res.data);
    res.data.forEach((element) => {
      console.log("ID :- ", element.id);
      console.log("Title :- ", element.title);
      console.log("Body :- ", element.body);
    });
  } catch (error) {
    console.log(error);
  }
}*/

//Async And Await | Multipe Data | Sowing Browser
async function makerequest() {
  try {
    console.log("Button Clicked");
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log("Data", res.data);
    const output = document.getElementById("allpost");
    res.data.forEach((element) => {
      output.innerHTML += `
        <div>ID: ${element.id}</div>
        <div>Titale: ${element.title}</div>
        <div>Body: ${element.body}</div><hr>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
