import axios from "axios";

const getApi = async (url: string, params?: any, opt?: any) => {
  let res = null;
  try {
    res = await axios.get(url, {
      params,
      baseURL: process.env.ROOT_URL,
      timeout: +process.env.TIME_OUT,
      ...opt,
    });
    if (res.status === 200) {
      console.log("Ok");
    }
  } catch (error) {
    res = error.response;
  }

  return res;
};

export { getApi };
