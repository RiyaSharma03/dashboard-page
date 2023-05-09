import "./index.css";
import React from "react";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Bonus from "./Components/Bonus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
    
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
