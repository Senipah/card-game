import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const HeaderStyle = styled.header`
  display: flex;
  height: min-content;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt='Logo' />
    </HeaderStyle>
  );
};

export default Header;
