import React from "react";
import "./App.css";
import { Auth } from "./Auth";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { SignIn } from "./SiginIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
