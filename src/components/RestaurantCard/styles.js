import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;

export const InfoTitle = styled.h2`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const InfoAddress = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  line-height: 22px;
  margin: 10px 0;
`;

export const RestaurantPhoto = styled.img`
  display: ${props => (props.imageLoaded ? 'none' : 'block')};
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;
