import { elements } from "../base";

export const addSections = () => {
  elements.practiceSectionIntro.style.display = "block";
  elements.practiceSectionLabs.style.display = "block";
};

export const removeSections = () => {
  elements.practiceSectionIntro.style.display = "none";
  elements.practiceSectionLabs.style.display = "none";
};
