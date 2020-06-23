import { createGlobalStyle } from 'styled-components';

// const AppContent = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   margin: 0 auto;
//   overflow: hidden;
// `;
export const GlobalStyles = createGlobalStyle`
body {
  width:100%;
  height:100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  background:${(props) => props.theme.colors.background};
  color:${(props) => props.theme.colors.textColor}
}
`;

// export default AppContent;
