import { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../../assets/seta_play.png';
import seta_virar from '../../assets/seta_virar.png';

const CardContainer = styled.div`
  width: 100%;
  height: ${props => props.isQuestion ? '131px' : '65px'};
  background-color: ${props => props.isQuestion ? '#FFFFD4' : '#FFFFFF'};
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  
  display: flex;
  flex-direction: ${props => props.isQuestion ? 'column' : 'row'};
  align-items: ${props => props.isQuestion ? 'flex-start' : 'center'};
  justify-content: ${props => props.isQuestion ? 'space-between' : 'space-between'};
  position: relative;
`;

const QuestionNumber = styled.p`
  font-family: 'Recursive', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #333333;
`;

const Text = styled.p`
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  margin: 18px 0;
`;

const Button = styled.img`
  width: 20px;
  height: 23px;
  cursor: pointer;
  position: ${props => props.isQuestion ? 'absolute' : 'static'};
  bottom: ${props => props.isQuestion ? '15px' : 'auto'};
  right: ${props => props.isQuestion ? '15px' : 'auto'};
`;

const AnswerButtons = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
`;

const AnswerButton = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  font-family: 'Recursive', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  background-color: ${props => {
    if (props.type === 'wrong') return '#FF3030';
    if (props.type === 'almost') return '#FF922E';
    return '#2FBE34';
  }};
`;

export default function Flashcard({ index, question, answer }) {
  const [cardState, setCardState] = useState('closed'); // closed, question, answer

  function showQuestion() {
    setCardState('question');
  }

  function showAnswer() {
    setCardState('answer');
  }

  return (
    <CardContainer isQuestion={cardState !== 'closed'}>
      {cardState === 'closed' && (
        <>
          <QuestionNumber>Pergunta {index + 1}</QuestionNumber>
          <Button src={seta_play} alt="Iniciar pergunta" onClick={showQuestion} />
        </>
      )}

      {cardState === 'question' && (
        <>
          <Text>{question}</Text>
          <Button 
            isQuestion={true}
            src={seta_virar} 
            alt="Virar carta"
            onClick={showAnswer}
          />
        </>
      )}

      {cardState === 'answer' && (
        <>
          <Text>{answer}</Text>
          <AnswerButtons>
            <AnswerButton type="wrong">Não lembrei</AnswerButton>
            <AnswerButton type="almost">Quase não lembrei</AnswerButton>
            <AnswerButton type="zap">Zap!</AnswerButton>
          </AnswerButtons>
        </>
      )}
    </CardContainer>
  );
}
