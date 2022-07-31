import "./App.css";
import { Task } from "./Task";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [dataBaru, setDataBaru] = useState();

  const tambahDataBaru = (e) => {
    setDataBaru(e.target.value);
  };
  const handleClick = () => {
    const barunya = {
      id: data.length === 0 ? 1 : data[data.length - 1].id + 1,
      nama: dataBaru,
      selesai: false,
    };
    setData([...data, barunya]);
    setDataBaru("");
  };

  const hapusItem = (id) => {
    setData(data.filter((data) => data.id !== id));
  };
  const tandaiSelesai = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, selesai: !item.selesai };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className="App">
      <h1>Menambahkan Nama</h1>
      <div className="inputan">
        <input type="text" onChange={tambahDataBaru} value={dataBaru} />
        <button onClick={handleClick}>Tambah Data</button>
      </div>
      <div className="listnya">
        {data.map((item) => (
          <Task key={item.id} task={item} hapusItem={hapusItem} tandaiSelesai={tandaiSelesai} />
        ))}
      </div>
    </div>
  );
};

export default App;
