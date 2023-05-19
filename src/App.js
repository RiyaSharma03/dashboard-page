import React from "react";
import { Dashboard, Bonus, Login } from "../src/Components";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
