import Axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
function Fetch() {
  const [catFact, setCatfact] = useState("");
  const catFetch = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => setCatfact(res.data.fact));
  };
  useEffect(() => {
    catFetch();
  }, []);
  return (
    <div className="name">
      <button onClick={catFetch}>Generate Button</button>
      <p>{catFact}</p>
    </div>
  );
}

export default Fetch;
