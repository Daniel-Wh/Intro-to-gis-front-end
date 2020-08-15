import axios from "axios";
import { addLink, linkAddedSuccess } from "../views/dataview";
import { elements } from "../base";

export const dataLinks = {
  data: [],
  elements: [],
};

export const linksGet = async () => {
  await axios.get("http://127.0.0.1:5000/getlinks", {}).then(
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
    .post("http://127.0.0.1:5000/addlinks", {
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
