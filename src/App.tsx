import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import Login from "./pages/Login";
import Header from "./pages/MainPage/Header";
import MainPage from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage";
import PreEnterPage from "./pages/PreEnterPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";

const App = () => {
  // If logged In pass this

  return (
    <Routes>
      <Route path="/" element={<PreEnterPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mainPage" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="feedback" element={<FeedbackPage />} />
      </Route>

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
