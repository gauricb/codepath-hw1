import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Richi's Calendar</h1>
      <h2>This is what your week looks like, Richi</h2>
      <Calendar />
    </div>
  );
};

export default App;
