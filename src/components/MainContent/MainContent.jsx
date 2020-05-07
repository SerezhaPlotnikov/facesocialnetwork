import React from "react";
import Global from "./MainContentStyled";

import MiddleContent from "./Content/MiddleContent";

const MainContent = props => {
  return (
    <Global>
      <MiddleContent />
    </Global>
  );
};

export default MainContent;
