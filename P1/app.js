let URL = "http://numbersapi.com";
let favNum = 48;

// P1
$.getJSON(`${URL}/${favNum}?json`).then((data) => {
  console.log(data);
});

// P2
let favNums = [24, 48, 23];
$.getJSON(`${URL}/${favNums}?json`).then((data) => {
  console.log(data);
});

//P3

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
