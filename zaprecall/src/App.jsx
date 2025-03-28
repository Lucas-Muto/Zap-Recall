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

function App() {
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
            />
          ))}
        </FlashcardsContainer>
      </Container>
    </>
  );
}

export default App;
