/*try {
  ajit;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}*/

//or Type of error
/*try {
  blabla;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("ReferenceError");
  } else if (error instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Unknow Error");
  }
}*/

//or
/*try {
  let json = '{"name":"Ajit kumar","age":25}';
  let user = JSON.parse(json);
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error);
}*/

//or
try {
  let json = '{"age":25}';
  let user = JSON.parse(json);
  if (!user.name) {
    throw new Error("Incomplete data : No name");
  }
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}
