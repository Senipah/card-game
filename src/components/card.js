import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import ReactCardFlip from 'react-card-flip';

const CardBack = styled.div`
  border: 3px solid white;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const CardFront = styled(CardBack)`
  background-color: blue;
`;

const Instrument = styled.img`
  width: 60px;
  height: 60px;
  border: none;
`;

const Card = ({ handleClick, id, img, name, flipped, solved, disabled }) => {
  return (
    <ReactCardFlip
      isFlipped={flipped || solved}
      flipSpeedFrontToBack={1.0}
      flipSpeedBackToFront={1.0}
      flipDirection='vertical'
    >
      <CardBack onClick={() => (disabled ? null : handleClick(id))}>
        <Instrument src={logo} />
      </CardBack>

      <CardFront onClick={() => (disabled ? null : handleClick(id))}>
        <Instrument src={img} alt={name} />
      </CardFront>
    </ReactCardFlip>
  );
};

export default Card;
