import { elements } from "./js/base";

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

elements.homeTab.addEventListener("click", changeTab("home"));

elements.tutorialsTab.addEventListener("click", changeTab("tutorials"));

elements.dataTab.addEventListener("click", "data");

elements.practiceTab.addEventListener("click", changeTab("practice"));
