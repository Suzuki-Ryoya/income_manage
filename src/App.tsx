import React from "react";
import "./App.css";
import { Auth } from "./Auth";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/signIn" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
