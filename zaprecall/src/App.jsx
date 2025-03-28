import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import cards from './data/cards';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 24px;
`;

const FlashcardsContainer = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  color: #333333;
`;

function App() {
  const [answeredCards, setAnsweredCards] = useState(0);

  function handleCardAnswer() {
    setAnsweredCards(prev => prev + 1);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <FlashcardsContainer>
          {cards.map((card, index) => (
            <Flashcard 
              key={index} 
              index={index}
              question={card.question}
              answer={card.answer}
              onAnswer={handleCardAnswer}
            />
          ))}
        </FlashcardsContainer>
        <Footer>
          {answeredCards}/{cards.length} CONCLUÍDOS
        </Footer>
      </Container>
    </>
  );
}

export default App;
