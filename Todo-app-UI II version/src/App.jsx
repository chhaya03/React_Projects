import "./App.css";
import InputRow from "./Components/InputRow";
import ItemMap from "./Components/ItemMap";

function App() {
  let todoVal = [
    { name: "Buy Milk", dueDate: "4/10/2024" },

    { name: "Exercise", dueDate: "4/10/2024" },

    {
      name: "Go to college",
      dueDate: "4/10/2024",
    },

    {
      name: "Having lunch",
      dueDate: "4/10/2024",
    },
  ];

  return (
    <center class="todo-container">
      <h1 className="heading">Todo App</h1>
      <InputRow></InputRow>
      <ItemMap todoitems={todoVal}></ItemMap>
    </center>
  );
}

export default App;
