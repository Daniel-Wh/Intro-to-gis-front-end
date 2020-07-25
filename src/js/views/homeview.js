import { elements } from "../base";

export const removeSections = () => {
  elements.dateSection.style.display = "none";
  elements.howToSection.style.display = "none";
  elements.howToSection.style.display = "none";
  elements.introductionSection.style.display = "none";
};

export const addSections = () => {
  elements.dateSection.style.display = "block";
  elements.howToSection.style.display = "block";
  elements.howToSection.style.display = "block";
  elements.introductionSection.style.display = "block";
};
