import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [nama, setNama] = useState("");
  const [listNama, setListNama] = useState([]);

  const handleClick = () => {
    const baru = {
      id: listNama.length === 0 ? 1 : listNama[listNama.length - 1].id + 1,
      namanya: nama,
      completed: false,
    };
    setListNama([...listNama, baru]);
  };

  const hapusItem = (id) => {
    setListNama(listNama.filter((e) => e.id !== id));
  };

  const completed = (id) => {
    setListNama(
      listNama.map((i) => {
        if (i.id === id) {
          return { ...i, completed: true };
        } else {
          return i;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="name">
        <input onChange={(e) => setNama(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="list">
        {listNama.map((i) => {
          return <Task key={i.id} namanya={i.namanya} id={i.id} completed={i.completed} hapusItem={hapusItem} selesai={completed} />;
        })}
      </div>
    </div>
  );
}

export default App;
