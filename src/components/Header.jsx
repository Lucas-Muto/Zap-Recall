import styled from 'styled-components';
import logo from '../../assets/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
  gap: 20px;
`;

const Logo = styled.img`
  width: 52px;
  height: 60px;
`;

const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 36px;
  color: #FFFFFF;
  font-weight: 400;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo ZapRecall" />
      <Title>ZapRecall</Title>
    </HeaderContainer>
  );
}
