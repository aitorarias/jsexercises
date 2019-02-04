let promise = new Promise(function (resolve, reject) {
  console.log("1");
  setTimeout(function () {
    resolve(console.log("2"));
  }, 3000);
});

promise.then(function () {
  return console.log("3");
}).then(function () {
  return setTimeout(function () {
    console.log("4");
  }, 1000);
});