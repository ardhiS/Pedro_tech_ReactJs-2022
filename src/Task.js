export const Task = (props) => {
  return (
    <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1>{props.namanya}</h1>
      <button onClick={() => props.hapusItem(props.id)}>X</button>
      <button onClick={() => props.selesai(props.id)}>Completed</button>
    </div>
  );
};
