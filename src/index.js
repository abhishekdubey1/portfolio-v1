import "./styles.css";

const ipmode = document.querySelector(".mode");
const app = document.getElementById("app");
ipmode.addEventListener("change", function (event) {
  // if (ipmode.checked) {
  app.classList.toggle("dark");
  // } else {
  // ipmode.classList[1] = "light";
  // }
});
