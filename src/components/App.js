import React from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import AppContent from "./AppStyled";

const App = props => {
  return (
    <AppContent>
      <Header />
      <MainContent />
    </AppContent>
  );
};

export default App;
