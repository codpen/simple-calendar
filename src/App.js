import { useState } from "react";
import ReactCalendar from "./components/Calendar";
import './App.css';

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleClick = () => {
    setShowCalendar(!showCalendar);
  }
  return (
    <div className="toggle-calendar">
      <button onClick={handleClick}>
        {showCalendar ? "Hide Calendar" : "Show Calendar"}
      </button>
      {showCalendar && <ReactCalendar />}
    </div>
  );
}

export default App;
