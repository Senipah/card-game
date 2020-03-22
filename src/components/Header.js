import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png'

const HeaderStyle = styled.header`
  display: flex;
  flex-grow: 2;
  justify-content: center;
`

const Header = () => {
  return(
    <HeaderStyle>
      <img src={logo} alt="Logo"/>
    </HeaderStyle>
  )
}

export default Header;