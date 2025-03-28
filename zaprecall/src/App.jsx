import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 24px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
