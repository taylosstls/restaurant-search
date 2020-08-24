import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyFrameLoading = keyframes`
  0% {
    opacity: .2;
  }
  100% {
    opacity: .5;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: ${props => props.theme.colors.text};
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${props => props.width};
  height: ${props => props.height};
  animation: ${keyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);
