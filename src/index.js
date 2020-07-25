import { elements } from "../src/js/base";
import * as homeView from "../src/js/views/homeview";

let state = {
  page: "home",
};

function changeTab(tab) {
  console.log("change tab called");
  if (state.page !== tab) {
    // first see what the current state is to remove
    switch (state.page) {
      case "home":
        homeView.removeSections();
        break;
      case "data":
        // dataView.closeDataTab();
        break;
      case "practice":
        // practiceView.closePracticeTab();
        break;
      // remove what's in the practice
      case "tutorials":
        // labsView.closeLabsTab();
        break;
      // remove whats in labs
    }
    switch (tab) {
      case "home":
        homeView.addSections();
        break;
      case "data":
        // dataView.openDataTab();
        break;
      case "tutorials":
        // labsView.openLabsTab();
        break;
      // add labs to display
      case "practice":
        // practiceView.openPracticeTab();
        break;
      // add practice to display
    }
    state.page = tab;
  }
}

window.addEventListener("load", () => {
  changeTab("home");
});

elements.homeTab.addEventListener("click", () => {
  changeTab("home");
});

elements.tutorialsTab.addEventListener("click", () => {
  changeTab("tutorials");
});

elements.dataTab.addEventListener("click", () => {
  changeTab("data");
});

elements.practiceTab.addEventListener("click", () => {
  changeTab("practice");
});
