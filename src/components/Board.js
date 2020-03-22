import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const BoardStyle = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Board = ({ disabled, cards, flipped, solved, handleClick }) => {
  return (
    <BoardStyle>
      {cards.map(card => {
        return (
          <Card
            key={card.id}
            id={card.id}
            img={card.img}
            name={card.name}
            flipped={flipped.includes(card.id)}
            solved={solved.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
          ></Card>
        );
      })}
    </BoardStyle>
  );
};

export default Board;
