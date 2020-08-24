import axios from "axios";
import { addLink, linkAddedSuccess } from "../views/dataview";
import { elements } from "../base";

export const dataLinks = {
  data: [],
  elements: [],
};

const siteurl = "https://intro-to-gis-site.herokuapp.com";

export const linksGet = async () => {
  await axios.get(`${siteurl}/getlinks`, {}).then(
    (response) => {
      if (response.status === 200) {
        response.data.forEach((element) => {
          dataLinks.data.push({
            url: element.url,
            description: element.description,
          });
        });
      }
    },
    (error) => {
      console.log(error);
    }
  );
};

export const linkPost = async (description, url) => {
  await axios
    .post(`${siteurl}/addlinks`, {
      description: description,
      url: url,
    })
    .then(
      (response) => {
        if (response.status === 200) {
          dataLinks.data.push(response.data);
          addLink(response.data["url"], response.data["description"]);
          linkAddedSuccess();
          return true;
        }
      },
      (error) => {
        console.log(error);
        alert(
          "Uhhh, this is embarassing. Something went wrong. Try again or email whitneyd@southwestern.edu for help"
        );
        return false;
      }
    );
};

export const getLabs = (labNumber) => {
  axios({
    url: `${siteurl}/getlab/${labNumber}`, //your url
    method: "GET",
    responseType: "blob", // important
  }).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    (error) => {
      alert(
        "Uhhh, this is embarassing. Something went wrong. Try again or email whitneyd@southwestern.edu for help"
      );
      console.log(error);
    }
  );
};
