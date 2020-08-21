import { elements } from "../src/js/base";
import * as homeView from "../src/js/views/homeview";
import * as tutorialsView from "../src/js/views/tutorialsview";
import * as dataView from "../src/js/views/dataview";
import * as practiceView from "../src/js/views/practiceview";
import * as datalinksModel from "../src/js/models/dataLinksModel";

let state = {
  page: "home",
};

function changeTab(tab) {
  if (state.page !== tab) {
    // first see what the current state is to remove
    switch (state.page) {
      case "home":
        homeView.removeSections();
        break;
      case "data":
        dataView.removeSections();
        break;
      case "practice":
        practiceView.removeSections();
        break;
      // remove what's in the practice
      case "tutorials":
        tutorialsView.removeSections();
        break;
      // remove whats in labs
    }
    switch (tab) {
      case "home":
        homeView.addSections();
        break;
      case "data":
        dataView.addSections();
        break;
      case "tutorials":
        tutorialsView.addSections();
        break;
      // add labs to display
      case "practice":
        practiceView.addSections();
        break;
      // add practice to display
    }
    state.page = tab;
  }
}

window.addEventListener("load", () => {
  changeTab("home");
  tutorialsView.removeSections();
  dataView.removeSections();
  practiceView.removeSections();
  datalinksModel.linksGet();
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
elements.homeFooter.addEventListener("click", () => {
  changeTab("home");
  document.documentElement.scrollTop = 0;
});
elements.tutorialsFooter.addEventListener("click", () => {
  changeTab("tutorials");
  document.documentElement.scrollTop = 0;
});
elements.dataFooter.addEventListener("click", () => {
  changeTab("data");
  document.documentElement.scrollTop = 0;
});
elements.practiceFooter.addEventListener("click", () => {
  changeTab("practice");
  document.documentElement.scrollTop = 0;
});

// form submit on new data/url
elements.formSubmitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  dataView.formSubmit();
});

elements.practiceSectionLab1.addEventListener("click", (e) => {
  e.preventDefault();
  datalinksModel.getLabs("1");
});

elements.practiceSectionLab2.addEventListener("click", (e) => {
  e.preventDefault();
  datalinksModel.getLabs("2");
});
