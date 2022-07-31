export const Task = (props) => {
  return (
    <div className="task" style={{ backgroundColor: props.task.selesai ? "green" : "white" }}>
      <h1>{props.task.nama}</h1>
      <button onClick={() => props.hapusItem(props.task.id)}>X</button>
      <button onClick={() => props.tandaiSelesai(props.task.id)}>Completed</button>
    </div>
  );
};
