import React, { Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  min-width: 0;
  min-height: 0;
  width: 100%;
  max-width: 540px;
  height: 80%;
  box-sizing: content-box;
  margin: 2rem 0;
`;

function App() {
  return (
    <Fragment>
    <Normalize />
    <div className='App'>
      <Container>
        <Header />
      </Container>
    </div>
  </Fragment>
  );
}

export default App;
