import { elements } from "../base";
import { dataLinks, linkPost } from "../models/dataLinksModel";

let dataAdded = false;

export const removeSections = () => {
  elements.dataSectionIntro.style.display = "none";
  elements.dataSectionLinks.style.display = "none";
  elements.dataSectionInput.style.display = "none";
  elements.dataTab.classList.remove("activeTab");
};

export const addSections = () => {
  elements.dataSectionIntro.style.display = "block";
  elements.dataSectionLinks.style.display = "block";
  elements.dataSectionInput.style.display = "block";
  if (!dataAdded) {
    const data = dataLinks.data;
    data.forEach((obj, index) => {
      const linkDiv = addLink(obj.url, obj.description);
      dataLinks.elements.push(linkDiv);
    });
    dataAdded = true;
  }
  elements.dataTab.classList.add("activeTab");
  elements.title.textContent = "GIS/Data";
};

export const addLink = (url, description) => {
  let div = document.createElement("li");
  div.innerHTML = `<a href="${url}" target="_blank">${url}</a><p>${description}</p>`;
  elements.dataLinksUL.appendChild(div);
  return div;
};

export const formSubmit = async () => {
  const url = elements.formURL.value;
  const desc = elements.formDescription.value;
  await linkPost(desc, url);
};

export const linkAddedSuccess = () => {
  elements.formSuccessNotification.classList.remove("hidden", true);
  elements.formSuccessNotification.classList.add("active", true);
  elements.formSuccessNotification.style.opacity = "1";
  elements.formURL.value = "";
  elements.formDescription.value = "";

  setTimeout(() => {
    elements.formSuccessNotification.classList.remove("active", true);
    elements.formSuccessNotification.classList.add("hidden", true);
    elements.formSuccessNotification.style.opacity = "0";
  }, 3000);
};
