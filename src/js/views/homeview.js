import { elements } from "../base";

export const removeSections = () => {
  elements.dateSection.style.display = "none";
  elements.howToSection.style.display = "none";
  elements.howToSection.style.display = "none";
  elements.introductionSection.style.display = "none";
  // elements.homeTab.classList.remove("activeTab");
};

export const addSections = () => {
  elements.title.textContent = "GIS/home";
  elements.dateSection.style.display = "block";
  elements.howToSection.style.display = "block";
  elements.howToSection.style.display = "block";
  elements.introductionSection.style.display = "block";
  // elements.homeTab.classList.add("activeTab");
};
