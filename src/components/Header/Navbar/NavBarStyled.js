import styled from 'styled-components';
// import darkTheme from '../../common/dark'

const Navtop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.cardBackground};
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.background};
  a {
    display: inline-block;
    text-decoration: none;
    position: relative;
    padding: 2px 5px;
    color: ${(props) => props.theme.colors.textColor};
  }
`;
//==

const LeftBarStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Logo = styled.div`
  display: inline-block;
  outline: none;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 24px;
`;
const Input = styled.div`
  min-width: 144px;
  width: 100%;
  max-width: 448px;
  input {
    line-height: 22px;
    width: 100%;
  }
`;
export { LeftBarStyle, Logo, Input, Navtop };

export default Bar;
