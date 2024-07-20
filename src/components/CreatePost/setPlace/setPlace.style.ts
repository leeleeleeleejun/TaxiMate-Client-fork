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

export const SearchBarWrapper = styled.button`
  width: 100%;
  height: 46px;
  padding: 14px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background: var(--color-white);
  box-shadow: 0 0 6px 2px var(--color-shadow);
`;

export const MyLocationButton = styled.button`
  margin-top: 30px;
  margin-left: auto;
  display: flex;
  align-items: center;

  color: var(--color-blue);
  font-weight: var(--weight-semi-bold);

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
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
