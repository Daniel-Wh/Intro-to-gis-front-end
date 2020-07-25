import { elements } from "../base";

export const removeSections = () => {
  elements.tutorialsIntroSection.style.display = "none";
};

export const addSections = () => {
  elements.tutorialsIntroSection.style.display = "block";
};
