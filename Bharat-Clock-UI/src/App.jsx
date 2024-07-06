import "./style.css";

function App() {
  let time = new Date();
  return (
    <div class="p-3 mb-2 bg-black text-white wrapper">
      <center>
        <div class=" bg-white text-dark container">
          <h1>Bharat Clock</h1>
          <p>This is the clock that shows the time in Bharat at all times</p>
          <p className="timeShow-para">
            This is the current time: {time.toLocaleDateString()} -{" "}
            {time.toLocaleTimeString()}
          </p>
        </div>
      </center>
    </div>
  );
}

export default App;
