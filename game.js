const btnOrange = document.getElementById("btn-orange");
const btnBrown = document.getElementById("btn-brown");
const btnGreen = document.getElementById("btn-green");
const textGo = document.getElementsByClassName("text-go");
const title = document.getElementById("title");
const btnRefresh = document.getElementsByClassName("btn-refresh");

// console.log(btnRefresh);

let counter = 0;

btnOrange.addEventListener("click", (e) => {
  // console.log("clicked on Orange and incremented!");
  // counter += counter;
  add();
});

btnBrown.addEventListener("click", (e) => {
  // console.log("clicked on Brown and incremented!");
  // counter += counter;
  add();
});

btnGreen.addEventListener("click", (e) => {
  // console.log("clicked on Brown and incremented!");
  // counter += counter;
  retrieve();
});

btnRefresh[0].addEventListener("click", (e) => {
  // console.log(btnRefresh[0].innerHTML);
  location.reload();
});

const add = (x) => {
  console.log("clicked and incremented!");
  title.innerText = counter++;
};

const retrieve = (x) => {
  console.log("clicked and decremented!");
  title.innerText = counter--;
};

setTimeout(function () {
  timer.innerText = "Time off!";
  btnOrange.remove();
  btnBrown.remove();
  btnGreen.remove();
}, 10000);
