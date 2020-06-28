import React from 'react';
import Container from './HeaderStyled';
import Navbar from './Navbar/Navbar';

const Header = (props) => {
  return (
    <Container>
      <Navbar toggle={props.toggle} />
    </Container>
  );
};

export default Header;
