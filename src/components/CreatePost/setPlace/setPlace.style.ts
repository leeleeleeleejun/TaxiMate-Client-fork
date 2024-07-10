import styled from 'styled-components';
import MarkerContainerStyle from '@/components/common/MarkerContainer/MarkerContainer.style.ts';

export const Main = styled.main`
  position: relative;
  height: 80%;

  .map-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const SubmitContainer = styled.div`
  padding: 30px 20px;
`;

export const MarkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;

  z-index: 2;

  top: calc(50% - 50px);
  left: calc(50% - 22px);

  ${MarkerContainerStyle};
`;
