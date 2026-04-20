import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [userName, setUsername] = useState("");
  const [num, setNum] = useState(0);

  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setUsername(
      response.data.results[0].name.first + " " + response.data.results[0].name.last);
  };

  useEffect(
    function () {
      getData();
    },
    [num],
  );

  return (
    <div>

      {userName}

      <br />
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default App;
