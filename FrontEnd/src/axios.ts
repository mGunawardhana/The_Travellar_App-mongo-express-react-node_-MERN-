import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
// import axios from "axios";
// import qs from "qs";

// const instance = axios.create({
//   baseURL: "http://localhost:4000/api/v1/",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   transformRequest: [
//     function (data, headers) {
//       if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
//         return qs.stringify(data);
//       }
//       return data;
//     },
//   ],
// });

// export default instance;
