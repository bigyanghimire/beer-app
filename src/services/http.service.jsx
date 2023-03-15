import axios from "axios";

export const get = (url) => {
  return new Promise((resolve, _reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response && response.data) {
          resolve({ status: true, data: response.data });
        }
      })
      .catch((ex) => {
        resolve({ status: false, error: ex.message });
      });
  });
};
