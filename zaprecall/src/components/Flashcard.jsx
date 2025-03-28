import styled from 'styled-components';
import seta_play from '../../assets/seta_play.png';

const CardContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuestionNumber = styled.p`
  font-family: 'Recursive', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #333333;
`;

const PlayButton = styled.img`
  width: 20px;
  height: 23px;
  cursor: pointer;
`;

export default function Flashcard({ index }) {
  return (
    <CardContainer>
      <QuestionNumber>Pergunta {index + 1}</QuestionNumber>
      <PlayButton src={seta_play} alt="Iniciar pergunta" />
    </CardContainer>
  );
}
