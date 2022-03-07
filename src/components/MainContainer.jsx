import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";

const MainContainer = () => {
  const [mockData, setMockData] = useState([]);

  const mockList = mockData.map((element) => {
    return <li>{element}</li>;
  });

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(`This is fake data ${i}`);
    }
    setMockData(array);
  }, []);

  return (
    <Paper
      elevation={16}
      sx={{
        marginLeft: "5%",
        marginTop: "-100px",
        position: "absolute",
        width: "90%"
      }}
    >
      <ul>{mockList}</ul>
    </Paper>
  );
};

export default MainContainer;
