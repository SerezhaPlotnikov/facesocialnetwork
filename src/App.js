import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import AppContent from "./AppStyled";

const App = () => {
  return (
    <AppContent>
      <Header />
      <MainContent />
    </AppContent>
  );
};

export default App;
