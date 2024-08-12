import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinLoadingIcon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 6px solid var(--color-blue);
  border-radius: 50%;

  border-top-color: transparent;
  animation: ${spin} 1s ease-in-out infinite;
  margin: 15px auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: 30%;
`;

// export const LoadingBox = styled.div`
//   width: 150px;
//   margin: auto;
//   padding: 10px 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//
//   border-radius: 4px;
//
//   background-color: var(--color-white);
//
//   font-size: var(--font-small);
//   font-weight: var(--weight-light);
//   box-shadow: 0 0 6px 2px var(--color-gray-200);
// `;
