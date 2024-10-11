
let theme = localStorage.getItem("theme");
let switchElement = document.querySelector(".switch");
let body = document.getElementsByTagName("body")[0];

// Add click event listener to toggle theme
switchElement.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") {
    // body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});