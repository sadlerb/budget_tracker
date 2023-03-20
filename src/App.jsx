import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

import "./App.css";

import Home from "./pages/home/home";
import BigSavings from "./pages/big-savings";
import Graphs from "./pages/graphs";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="/planner" element={<BigSavings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
