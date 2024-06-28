import styled from 'styled-components';
import { useNavermaps } from 'react-naver-maps';

import getCurrentLocation from '@/utils/getCurrentlocation.ts';
import { MoveCurrentLocationProps } from '@/types/props/index.ts';

import ActiveMoveLocationIcon from '@/assets/icons/map/active-move-location-icon.svg?react';
import NonActiveMoveLocationIcon from '@/assets/icons/map/non-active-move-location-icon.svg?react';

const MoveCurrentLocation = ({
  map,
  activeButton,
  setLocation,
}: MoveCurrentLocationProps) => {
  const navermaps = useNavermaps();

  const moveCurrentLocationFunc = async () => {
    if (map) {
      const { lat, lng } = await getCurrentLocation();
      const latLng = new navermaps.LatLng(lat, lng);
      map.setCenter(latLng);
      setLocation({ lat, lng });
    }
  };

  return (
    <Button onClick={moveCurrentLocationFunc}>
      {activeButton ? (
        <ActiveMoveLocationIcon />
      ) : (
        <NonActiveMoveLocationIcon />
      )}
    </Button>
  );
};

export default MoveCurrentLocation;

const Button = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;

  border-radius: 50%;

  position: absolute;
  bottom: calc(100vh / 5.5);
  right: 5%;
  z-index: 2;

  background-color: var(--color-white);
`;
