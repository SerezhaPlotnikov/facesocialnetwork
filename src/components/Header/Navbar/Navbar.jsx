import React from 'react';
import { Link } from 'react-router-dom';
import Bar, { Input, LeftBarStyle, Logo, Navtop } from './NavBarStyled';
import { ReactComponent as LogoImg } from '../../../assets/lgfb.svg';
import LoginContainer from './Login/LoginContainer';

import { ThemeTest } from '../../common/MainTheme';

const Navbar = (props) => {
  return (
    <Navtop>
      <LeftBarStyle>
        <Logo>
          <Link to="/">
            <LogoImg style={{ backgroundColor: 'white' }} />
          </Link>
        </Logo>
        <Input>
          <form action={`/search/top/`} method={'get'}>
            <input placeholder={'Search'}></input>
          </form>
        </Input>
      </LeftBarStyle>
      <Bar>
        <Link to="/">News</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/message">Message</Link>
      </Bar>
      <Bar>
        <ThemeTest onClick={props.toggle}>Theme</ThemeTest>
        <LoginContainer />
      </Bar>
    </Navtop>
  );
};

export default Navbar;
