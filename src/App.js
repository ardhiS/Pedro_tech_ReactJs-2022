import "./App.css";

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
          <div key={item.id} style={{ backgroundColor: item.selesai ? "green" : "white" }}>
            <h1>{item.nama}</h1>
            <button onClick={() => hapusItem(item.id)}>Hapus Nama</button>
            <button onClick={() => tandaiSelesai(item.id)}>{item.selesai ? "Bukan Nama Saya" : "Nama Saya"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
