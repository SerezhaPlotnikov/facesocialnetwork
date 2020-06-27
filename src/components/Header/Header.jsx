import React from 'react';
import Container from './HeaderStyled';
import Navbar from './Navbar/Navbar';

const Header = ({ toggle }) => {
  return (
    <Container>
      <Navbar toggle={toggle} />
    </Container>
  );
};

export default Header;
