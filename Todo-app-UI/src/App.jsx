import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>

      {/* input Row */}
      <div className="container">
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="items-container">
        {/* Second Row */}
        <div class="container">
          <div class="row kg-row">
            <div class="col-6">Buy Milk</div>
            <div class="col-4">4/10/2024</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div class="container">
          <div class="row kg-row">
            <div class="col-6">Go to College</div>
            <div class="col-4">4/10/2024</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
