let manualLink = document.querySelectorAll(".manual li");
let closeText = document.querySelector(".closeMessage");
const head = document.querySelector("head");

let newMeta = document.createElement("meta");
newMeta.setAttribute("http-equiv", "refresh");

head.appendChild(newMeta);

window.addEventListener("load", () => {
  mainLoader();
  closeWindow();
});

setTimeout(() => {
  closeText.style.display = "initial";
}, 15000);

// Load primary function
function mainLoader() {
  // Check for param value
  switch (getParameter("app")) {
    case null:
      break;
    case "main":
      showLink(0);
      newMeta.setAttribute("content", `0; URL=${"fmp://assessment.usd443.org/FMMain"}`);
      break;
    case "music":
      showLink(1);
      newMeta.setAttribute("content", `0; URL=${"fmp://mission.usd443.org/MusicTests"}`);
      break;
    case "checks":
      showLink(2);
      newMeta.setAttribute("content", `0; URL=${"fmp://assessment.usd443.org/checks"}`);
      break;
  }
}

// Close window after 25 seconds
function closeWindow() {
  setTimeout(() => {
    self.close();
  }, 25000);
}

// Returns value for the given param name
function getParameter(param) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(param);
}

// Show manual link after 10 seconds
function showLink(index) {
  setTimeout(() => {
    manualLink[index].style.display = "initial";
  }, 10000);
}
