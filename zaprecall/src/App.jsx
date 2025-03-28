import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import cards from './data/cards';
import party from '../assets/party.png';
import sad from '../assets/sad.png';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  min-height: 70px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: 'Recursive', sans-serif;
  color: #333333;
`;

const ResultMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;

  img {
    width: 23px;
    height: 23px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Counter = styled.p`
  font-size: 18px;
`;

function App() {
  const [answeredCards, setAnsweredCards] = useState(0);
  const [results, setResults] = useState([]);

  function handleCardAnswer(type) {
    setAnsweredCards(prev => prev + 1);
    setResults(prev => [...prev, type]);
  }

  function getResultMessage() {
    if (answeredCards !== cards.length) return null;

    const hasWrong = results.includes('wrong');
    return {
      icon: hasWrong ? sad : party,
      title: hasWrong ? 'Putz...' : 'Parabéns!',
      message: hasWrong 
        ? 'Ainda faltam alguns... Mas não desanime!' 
        : 'Você não esqueceu de nenhum flashcard!'
    };
  }

  const resultMessage = getResultMessage();

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
          {resultMessage && (
            <ResultMessage>
              <img src={resultMessage.icon} alt="Resultado" />
              <div>
                <h2>{resultMessage.title}</h2>
                <p>{resultMessage.message}</p>
              </div>
            </ResultMessage>
          )}
          <Counter>
            {answeredCards}/{cards.length} CONCLUÍDOS
          </Counter>
        </Footer>
      </Container>
    </>
  );
}

export default App;
