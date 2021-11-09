import axios from "axios";
import endpoints from "../../config/endpoints";

const { profilePage = {} } = endpoints || {};
const { profileDataApi = "" } = profilePage || {};

export const fetchProfileData = () => {
  return axios
    .get(profileDataApi)
    .then((result) => result)
    .catch((error) => {});
};
