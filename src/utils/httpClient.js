// import axios from "axios";

// const axiosDefaults = () => {
//   axios.defaults.baseURL = "https://test.tdtu.uz/api/";
// };

// const getInstance = () => {
//   axiosDefaults();
//   const instance = axios.create({
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return instance;
// };

// export { getInstance };

export const imgUrl = "https://kuprikqurilish.uz/files";

import axios from "axios";
const http = axios.create({
  baseURL: "https://kuprikqurilish.uz/api/v1/client/",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
});

export default http;
