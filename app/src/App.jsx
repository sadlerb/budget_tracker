import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

import {AppContainer} from "./App.styles";

import Home from "./pages/home/home";
import Login from "./pages/login/login";


const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
