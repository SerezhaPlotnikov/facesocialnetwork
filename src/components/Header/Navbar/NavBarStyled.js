import styled from "styled-components";

const Navtop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: aqua;
  a {
    display: inline-block;
    text-decoration: none;
    position: relative;
    padding: 2px;
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
