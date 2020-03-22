import React, { Fragment, useState, useEffect } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import background from './assets/img/background.png';
import Board from './components/Board';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

#root {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  background: url(${background});  
}

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  min-width: 0;
  min-height: 0;
  width: 100%;
  max-width: 540px;
  height: 80%;
  box-sizing: content-box;
  margin: 2rem 0;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  // const [losses, setLosses] = useState(0);

  const instrumentNames = [
    'Cello',
    'Clarinet',
    'Drums',
    'Flute',
    'Guitar',
    'Harp',
    'Maracas',
    'Piano',
    'Recorder',
    'Saxophone',
    'Tambourine',
    'Trumpet',
    'Violin',
    'Xylophone'
  ];

  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const initializeDeck = () => {
    return shuffle([...instrumentNames, ...instrumentNames]).map((e, i) => {
      return {
        id: i,
        img: require(`./assets/img/instruments/${e}.png`),
        name: e
      };
    });
  };

  useEffect(() => {
    setCards(initializeDeck());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newGame = () => {
    setSolved([]);
    setCards(initializeDeck());
    setWrongGuesses(0);
    setScore(0);
  };

  const checkScore = score => {
    if (solved.length === cards.length) {
      setWins(wins + 1);
      setTimeout(newGame, 1000);
    }
  };

  useEffect(() => {
    checkScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]); // Only re-run the effect if count changes

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        console.log('match');
        setSolved([...solved, flipped[0], id]);
        resetCards();
        updateScore(score, checkScore);
      } else {
        console.log('no match');
        noMatch();
      }
    }
  };

  const noMatch = () => {
    // updateGuesses(wrongGuesses, checkGuesses);
    setTimeout(resetCards, 1000);
  };

  function updateScore(score, callback) {
    var newScore = score + 1;
    setScore(score + 1);
    console.log(score);
    callback(newScore);
  }

  // function updateGuesses(wrongGuesses, callback) {
  //   var newGuesses = wrongGuesses + 1;
  //   setWrongGuesses(wrongGuesses + 1);
  //   callback(newGuesses);
  // }

  // const checkGuesses = wrongGuesses => {
  //   if (wrongGuesses > 14) {
  //     setLosses(losses + 1);
  //     setTimeout(newGame, 2000);
  //   }
  // };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.name === clickedCard.name;
  };

  return (
    <Fragment>
      <Normalize />
      <GlobalStyle />
      <Container>
        <Header
          wins={wins}
          // losses={losses}
          score={score}
          wrongGuesses={wrongGuesses}
          newGame={newGame}
        />
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
        />
      </Container>
    </Fragment>
  );
}

export default App;
