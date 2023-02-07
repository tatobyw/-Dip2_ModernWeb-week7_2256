import React from "react";
import "./App.css";
import AboutPage from "./components/pages/About";
import HelloMessage from "./components/pages/HelloMessage";
import HomePage from "./components/pages/Home";
import FooterPage from "./components/partials/Footer";
import HeaderPage from "./components/partials/Header";

const App = () => {
  return (
    <>
      <div className="App">
        <HelloMessage name="Mark" />
        <HelloMessage name="Woren" />
        <HelloMessage name="Jeff" />
        <FooterPage />
        <HeaderPage />
        <HomePage />
        <AboutPage />
      </div>
    </>
  );
};

export default App;
