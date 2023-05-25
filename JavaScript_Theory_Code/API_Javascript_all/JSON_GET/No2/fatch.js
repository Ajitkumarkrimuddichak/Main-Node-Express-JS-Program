document.getElementById("btn").addEventListener("click", ajit);

/*function ajit() {
  console.log("Button Clicked");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Data", data);
      let output = document.getElementById("allpost");
      data.forEach((element) => {
        output.innerHTML += `<div>ID: ${element.id}</div>
            <div>Title: ${element.title}</div>
            <div>Body: ${element.body}</div><hr>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}*/

//or Async And Await using data Display in browser
async function ajit() {
  try {
    console.log("Button Clicked");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    console.log("Data", data);
    let output = document.getElementById("allpost");
    data.forEach((element) => {
      output.innerHTML += `<div>ID: ${element.id}</div>
            <div>Title: ${element.title}</div>
            <div>Body: ${element.body}</div><hr> `;
    });
  } catch (error) {
    console.log(error);
  }
}
