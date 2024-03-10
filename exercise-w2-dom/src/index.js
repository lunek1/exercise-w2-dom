// Radio buttons
const darkRadio = document.getElementById("dark");
const lightRadio = document.getElementById("light");
const crazyRadio = document.getElementById("crazy");

// Box
const box = document.querySelector(".box");

// Function for theme change
function handleThemeChange() {
// Select all <p> elements so that we can add a different color to their font based on the theme
  const paragraphs = box.querySelectorAll("p"); 

  if (darkRadio.checked) {
    box.className = "box dark";
    paragraphs.forEach((p) => {
      p.style.color = "white"; 
    });
  } else if (lightRadio.checked) {
    box.className = "box light";
    paragraphs.forEach((p) => {
      p.style.color = "black"; 
    });
  } else if (crazyRadio.checked) {
    box.className = "box crazy";
    paragraphs.forEach((p) => {
      p.style.color = "#42304d"; 
    });
  }
}

// Event listeners - when radio buttons are clicked this function will update the selected theme.
darkRadio.addEventListener("change", handleThemeChange);
lightRadio.addEventListener("change", handleThemeChange);
crazyRadio.addEventListener("change", handleThemeChange);

console.log("Start Here 😉");
