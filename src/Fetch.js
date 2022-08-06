import Axios from "axios";
import "./App.css";
import { useState } from "react";
function Fetch() {
  const [data, setData] = useState("");
  const fetchData = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => setData(res.data[0].excuse));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Generate Excuse Button</h1>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>
      <h1>{data}</h1>
    </div>
  );
}

export default Fetch;
