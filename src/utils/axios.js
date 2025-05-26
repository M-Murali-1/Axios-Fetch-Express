import axios from "axios";

export const axiosGet = async () => {
  const response = await axios.get("http://localhost:8080/axios");
  const result = response.data;
  console.log("Output:", result);
};

export const axiosPathParamsGet = async () => {
  const response = await axios.get("http://localhost:8080/axios/1");
  const result = response.data;
  console.log("Output:", result);
};

export const axiosQueryParamsGet = async () => {
  const response = await axios.get("http://localhost:8080/axios", {
    params: { name: "Murali", age: 21, Gender: "Male" },
  });
  const result = response.data;
  console.log("Output:", result);
};

// Syntax : axios.post(url, data, config)
// In the data we needed to send the POST request body (e.g., JSON).
// Here the body should needed to send after the url and in the config we will send additional options like headers, params, etc.
// The Parameters for this function should follw the same order.

export const axiosBodyPost = async (postBody) => {
  const response = await axios.post("http://localhost:8080/axios", postBody);
  const result = response.data;
  console.log("Output:", result);
};

export const axiosPathParamsPost = async (postBody) => {
  const response = await axios.post("http://localhost:8080/axios/1", postBody);
  const result = response.data;
  console.log("Output:", result);
};

export const axiosQueryParamsPost = async (postBody) => {
  const response = await axios.post("http://localhost:8080/axios", postBody, {
    params: { name: "Sai Krishna", age: 19 },
  });
  const result = response.data;
  console.log("Output:", result);
};


// For the PUT,DELETE we will follow the same axios code just to change the method in the axios.