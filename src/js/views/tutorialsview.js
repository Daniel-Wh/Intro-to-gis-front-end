import { elements } from "../base";

export const removeSections = () => {
  elements.tutorialsIntroSection.style.display = "none";
  elements.tutorialsTab.classList.remove("activeTab");
};

export const addSections = () => {
  elements.tutorialsIntroSection.style.display = "block";
  elements.title.textContent = "GIS/Tutorials";
  elements.tutorialsTab.classList.add("activeTab");
};
