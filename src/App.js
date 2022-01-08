import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContainer, ContentContainer, PageContainer } from "./App-css";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/homepage/Home";
import Login from "./pages/homepage/Login";
import Register from "./pages/homepage/Register";
// eslint-disable-next-line
import app from "./config/firebaseConfig";

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <ContentContainer>
        <Sidebar />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </PageContainer>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
