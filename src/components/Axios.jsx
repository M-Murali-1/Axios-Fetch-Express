import React from "react";
import {
  axiosGet,
  axiosPathParamsGet,
  axiosQueryParamsGet,
  axiosBodyPost,
  axiosPathParamsPost,
  axiosQueryParamsPost
} from "../utils/axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
const Axios = () => {
    const PostData = {
        roll_no:"20BF1A0590",
        name:"M.Murali",
        branch:"Computer Science and Engineering",
        college:"Sri Venkateswara College of Engineering"
    }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "40%",
        }}
      >
        <Button variant="outlined" onClick={axiosGet}>
          Axios Get Method
        </Button>
        <Button variant="outlined" onClick={axiosPathParamsGet}>
          Axios Get Method with Path Params
        </Button>
        <Button variant="outlined" onClick={axiosQueryParamsGet}>
          Axios Get Method with Query Params
        </Button>
        <Button variant="outlined" onClick={()=>axiosBodyPost(PostData)}>
          Axios Post Method with Body
        </Button>
        <Button variant="outlined" onClick={()=>axiosPathParamsPost(PostData)}>
          Axios Post Method with Body and Path Params
        </Button>
        <Button variant="outlined" onClick={()=>axiosQueryParamsPost(PostData)}>
          Axios Post Method with Body and Query Params
        </Button>
      </Box>
    </div>
  );
};

export default Axios;
