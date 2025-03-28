import { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../../assets/seta_play.png';
import seta_virar from '../../assets/seta_virar.png';
import icone_certo from '../../assets/icone_certo.png';
import icone_erro from '../../assets/icone_erro.png';
import icone_quase from '../../assets/icone_quase.png';

const CardContainer = styled.div`
  width: 100%;
  min-height: ${props => props.isQuestion ? '131px' : '65px'};
  background-color: ${props => props.isQuestion ? '#FFFFD4' : '#FFFFFF'};
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  
  display: flex;
  flex-direction: ${props => props.isQuestion ? 'column' : 'row'};
  align-items: ${props => props.isQuestion ? 'flex-start' : 'center'};
  justify-content: space-between;
  position: relative;
`;

const QuestionNumber = styled.p`
  font-family: 'Recursive', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${props => {
    if (props.status === 'wrong') return '#FF3030';
    if (props.status === 'almost') return '#FF922E';
    if (props.status === 'zap') return '#2FBE34';
    return '#333333';
  }};
  text-decoration: ${props => props.status ? 'line-through' : 'none'};
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
  padding: 15px 0 0;
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

const StatusIcon = styled.img`
  width: 23px;
  height: 23px;
`;

export default function Flashcard({ index, question, answer, onAnswer }) {
  const [cardState, setCardState] = useState('closed'); // closed, question, answer, completed
  const [status, setStatus] = useState(null);

  function showQuestion() {
    setCardState('question');
  }

  function showAnswer() {
    setCardState('answer');
  }

  function handleAnswer(answerType) {
    setStatus(answerType);
    setCardState('completed');
    onAnswer(answerType);
  }

  const statusIcons = {
    wrong: icone_erro,
    almost: icone_quase,
    zap: icone_certo
  };

  return (
    <CardContainer isQuestion={cardState === 'question' || cardState === 'answer'}>
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
            <AnswerButton type="wrong" onClick={() => handleAnswer('wrong')}>
              Não lembrei
            </AnswerButton>
            <AnswerButton type="almost" onClick={() => handleAnswer('almost')}>
              Quase não lembrei
            </AnswerButton>
            <AnswerButton type="zap" onClick={() => handleAnswer('zap')}>
              Zap!
            </AnswerButton>
          </AnswerButtons>
        </>
      )}

      {cardState === 'completed' && (
        <>
          <QuestionNumber status={status}>Pergunta {index + 1}</QuestionNumber>
          <StatusIcon src={statusIcons[status]} alt="Status da resposta" />
        </>
      )}
    </CardContainer>
  );
}
