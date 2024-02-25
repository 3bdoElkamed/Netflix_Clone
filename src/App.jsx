import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Player from "./pages/Player";
import MyList from "./pages/MyList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/player" element={<Player />} />
      <Route path="/mylist" element={<MyList />} />

    </Routes>
  );
};

export default App;
