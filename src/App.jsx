import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

import {AppContainer} from "./App.styles";

import Home from "./pages/home/home";
import BigSavings from "./pages/big-savings/big-savings";
import Graphs from "./pages/graphs/graphs";
import Profile from "./pages/profile/profile";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="/planner" element={<BigSavings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
