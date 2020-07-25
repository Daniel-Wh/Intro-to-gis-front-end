const base = {
  homeTab: document.getElementById("home-header"),
  tutorialsTab: document.getElementById("tutorials-header"),
  dataTab: document.getElementById("data-header"),
  practiceTab: document.getElementById("practice-header"),
  dateSection: document.getElementById("important-dates"),
};

base.homeTab.addEventListener("click", () =>
  console.log("home button clicked")
);

base.tutorialsTab.addEventListener(
  "click",
  () => (base.dateSection.style.display = "none")
);

base.dataTab.addEventListener(
  "click",
  () => (base.dateSection.style.display = "block")
);

base.practiceTab.addEventListener("click", () =>
  console.log("practice clicked")
);
