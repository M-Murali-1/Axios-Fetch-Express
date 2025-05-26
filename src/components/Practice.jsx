import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
const Practice = () => {
  const data = { name: "", age: 0, gender: "" };
  const [customerData, setCustomerData] = useState(data);
  const handleChange = (e) => {
    setCustomerData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log("the data was changing in it..!", customerData);
  };
  const handleReset = () => {
    console.log("The reset button was clicked..!");
    setCustomerData((prev) => ({ ...prev, ...data }));
  };
  const handleSubmit = async () => {
    console.log("Tje data we are setting here..!");
    // GET Method By using the Fetch
    const result = await fetch("http://localhost:8080", {
      method: "GET",
    });
    const response = await result.text();
    // POST Method By using the Fetch.
    const result1 = await fetch("http://localhost:8080/practice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerData),
    });
    const response1 = await result1.json();

    // GET Method by using the Fetch sending the Path Params.
    // const response3 = await fetch("http://localhost:8080/practice/2", {
    //   method: "GET",
    // });
    // const result3 = await response3.json();

    // GET Method by using the Axios sending the Path Params.
    const response3 = await axios.get("http://localhost:8080/practice/2");
    const result3 = response3.data;

    // In the backend we will extract it from the req.params and based on the param value we will get the output.
    // router.get("/:id", (req, res) => {
    //   console.log("the Params we are getting here are:", req.params);
    //   res.status(200).send({ "Data From the req.params": req.params });
    // });
    // console.log("GET Method by using the Fetch and axios sending the Path Params :",result3)

    //     Output :
    //    GET Method by using the Fetch and axios sending the Path Params : {
    //     "Data From the req.params": {
    //         "id": "2"
    //     }
    // }

    // GET Method by FETCH Sending the Query Params :
    const queryParams = new URLSearchParams(customerData).toString(); // This wiil be convert the objcet data into the name=Hello&age=0123&gender=Male
    console.log("the query Params here are :", queryParams);
    // We will be passing it within the fetch method like shown below.
    // const response4 = await fetch(
    //   `http://localhost:8080/practice?${queryParams}`,
    //   {
    //     method: "GET", // Defaulty the method is the GET Here.
    //   }
    // );
    // const result4 = await response4.json();

    // GET Method by Axios Sending the Query Params :
    // const response4 = await axios.get("http://localhost:8080/practice", {
    //   params: customerData,
    // });
    // const result4 = response4.data;
    // console.log(
    //   "GET Method by Fetch and Axios Senfing the Query Params:",
    //   result4
    // );
    // In the backend we will be accessing like :
    //     app.get("/practice",(req,res)=>{
    // console.log("the request query here are :",req.query)
    // res.status(200).send({data:req.query});
    // })
    // Output :
    //GET Method by Fetch and Axios Senfing the Query Params: {
    //     "data": {
    //         "name": "Hello",
    //         "age": "0123",
    //         "gender": "Male"
    //     }
    // }


    // POST Method by Fetch sending the Body in it.
    // const response5 = await fetch("http://localhost:8080/practice", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(customerData),
    // });
    // const result5 = await response5.json();
    
    // POST Method by Axios sending the body in it.
    const response5 = await axios.post("http://localhost:8080/practice",customerData);
    const result5 = response5.data;
    console.log(
      "POST Method by Fetch and Axios sending the Body in it:",
      result5
    );
    // In the backend we will access it like :
    //     app.post("/practice",(req,res)=>{
    //     res.status(200).send({data_by_post_body:req.body})
    // })
    // Output :
    //POST Method by Fetch and Axios sending the Body in it: {
    //     "data_by_post_body": {
    //         "name": "Hello",
    //         "age": "0123333",
    //         "gender": "Male"
    //     }
    // }

  };
  return (
    <div>
      <p>This is inside of the practice component..!</p>
      <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <TextField
          id="name"
          label="Name"
          value={customerData.name}
          variant="outlined"
          onChange={handleChange}
          helperText="Name Field..!"
        />
        <TextField
          id="age"
          label="Age"
          value={customerData.age}
          variant="outlined"
          onChange={handleChange}
          helperText="Age Field..!"
        />
        <TextField
          id="gender"
          label="Gender"
          variant="outlined"
          value={customerData.gender}
          onChange={handleChange}
          helperText="Gender Field..!"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Practice;
