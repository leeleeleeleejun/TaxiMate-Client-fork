import styled from 'styled-components';
import MarkerIconStyle from '@/components/common/MarkerIcon/MarkerIcon.style.ts';

export const Main = styled.main`
  position: relative;
  .map-wrapper {
    width: 100%;
    height: calc(100vh - (var(--header-height) + var(--footer-height)));
  }
  ${MarkerIconStyle}
`;
