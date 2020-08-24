import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Slider from 'react-slick';

import { Map } from '../../components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  max-width: 360px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 9;
`;

export const LogoRestaurant = styled.img`
  margin-bottom: 16px;
`;

export const Search = styled.section`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const TextFieldColor = styled(TextField)`
  .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.colors.primary};
  }
  .MuiFilledInput-root,
  .Mui-focused.MuiInputBase-formControl {
    background: #fff;
    &:hover,
    &:focus {
      background: #fff;
    }
  }
  .MuiFilledInput-underline {
    &::after {
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    right: 8px;
  }
`;

export const MapContainer = styled(Map)`
  width: 100%;
  max-width: calc(100% - 360px);
  height: 100vh;
  background: #222;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin: 0 8px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 32px;
  margin: 32px 0 16px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 32px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ModalTitle = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const ModalContent = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
`;
