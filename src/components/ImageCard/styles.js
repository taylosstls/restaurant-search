import styled from 'styled-components';

export const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background: url(${props => props.photo}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: #fff;
  font-size: 13px;
  line-height: 18px;
  margin: 0;
  padding: 10px;
`;
