const base = {
  homeTab: document.getElementById("home-header"),
  tutorialsTab: document.getElementById("tutorials-header"),
  dataTab: document.getElementById("data-header"),
  practiceTab: document.getElementById("practice-header"),
  dateSection: document.getElementById("important-dates"),
};

let state = {
  tab: "home",
};

const changeTab = (tab) => {
  if (state.page !== tab) {
    // first see what the current state is to remove
    switch (state.page) {
      case "home":
        homeView.removeHomeBoxes();
        break;
      case "data":
        dataView.closeDataTab();
        break;
      case "practice":
        practiceView.closePracticeTab();
        break;
      // remove what's in the practice
      case "labs":
        labsView.closeLabsTab();
        break;
      // remove whats in labs
    }
    switch (tab) {
      case "home":
        homeView.addHomeBoxes();
        break;
      case "data":
        dataView.openDataTab();
        break;
      case "labs":
        labsView.openLabsTab();
        break;
      // add labs to display
      case "practice":
        practiceView.openPracticeTab();
        break;
      // add practice to display
    }
    state.page = tab;
  }
};

base.homeTab.addEventListener("click", changeTab("home"));

base.tutorialsTab.addEventListener("click", changeTab("tutorials"));

base.dataTab.addEventListener("click", "data");

base.practiceTab.addEventListener("click", changeTab("practice"));
