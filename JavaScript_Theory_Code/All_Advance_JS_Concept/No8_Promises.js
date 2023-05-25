//resolve
/*const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
  }, 5000);
});
pobj1.then((rollno) => {
  console.log(rollno);
});*/

//or reject
/*const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    reject("Error while communicating");
  }, 2000);
});
pobj1
  .then((rollno) => {
    console.log(rollno);
  })
  .catch((error) => {
    console.log(error);
  });*/

//or
const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
  }, 2000);
});
const getbiodata = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        let biodata = {
          name: "Ajit kumar",
          age: 25,
        };
        resolve(
          `My roll no is ${indexdata} . my name is ${biodata.name} and i am ${biodata.age} years old`
        );
      },
      2000,
      indexdata
    );
  });
};
pobj1
  .then((rollno) => {
    console.log(rollno);
    return getbiodata(rollno[0]);
  })
  .then((kuchhbhi) => {
    console.log(kuchhbhi);
  })
  .catch((error) => {
    console.log(error);
  });
