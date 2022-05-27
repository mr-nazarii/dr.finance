import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PreEnterPage from "./pages/PreEnterPage";
import Register from "./pages/Register";

const App = () => {
  // If logged In pass this
  return (
    <Routes>
      <Route path="/" element={<PreEnterPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
