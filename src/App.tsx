import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import PreEnterPage from "./pages/PreEnterPage";
import Register from "./pages/Register";

const App = () => {
  // If logged In pass this
  return (
    <Routes>
      <Route path="/" element={<PreEnterPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
