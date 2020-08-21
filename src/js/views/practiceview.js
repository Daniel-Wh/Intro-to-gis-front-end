import { elements } from "../base";

export const addSections = () => {
  elements.practiceSectionIntro.style.display = "block";
  elements.practiceSectionLabs.style.display = "block";
  elements.practiceSectionLinks.style.display = "block";
  elements.title.textContent = "GIS/practice";
  elements.practiceTab.classList.remove("activeTab");
};

export const removeSections = () => {
  elements.practiceSectionIntro.style.display = "none";
  elements.practiceSectionLabs.style.display = "none";
  elements.practiceSectionLinks.style.display = "none";
  elements.practiceTab.classList.add("active-tab");
};
