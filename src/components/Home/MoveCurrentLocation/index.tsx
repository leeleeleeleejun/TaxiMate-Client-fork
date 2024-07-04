import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavermaps } from 'react-naver-maps';

import { RootState } from '@/store';
import getCurrentLocation from '@/utils/getCurrentlocation.ts';
import { MoveCurrentLocationProps } from '@/types/props/index.ts';

import ActiveMoveLocationIcon from '@/assets/icons/map/active-move-location-icon.svg?react';
import NonActiveMoveLocationIcon from '@/assets/icons/map/non-active-move-location-icon.svg?react';

const MoveCurrentLocation = ({
  map,
  activeButton,
}: MoveCurrentLocationProps) => {
  const navermaps = useNavermaps();
  const postListHeight = useSelector(
    (state: RootState) => state.postListSlice.height
  );
  const activeMarker = useSelector(
    (state: RootState) => state.mapSlice.activeMarker
  );

  const [bottom, setBottom] = useState(0);
  const [isMax, setIsMax] = useState(false);

  useEffect(() => {
    if (activeMarker) {
      setBottom(80);
    }
  }, [activeMarker]);

  useEffect(() => {
    checkMax(bottom, setIsMax); // 초기 상태 설정
  }, [bottom]);

  // 자연스러운 애니메이션을 위해 아래에서 위로 나오게
  useEffect(() => {
    setBottom(0);
    return setBottom(postListHeight);
  }, [postListHeight]);

  const moveCurrentLocationFunc = async () => {
    if (map) {
      const { lat, lng } = await getCurrentLocation();
      const latLng = new navermaps.LatLng(lat, lng);
      map.setCenter(latLng);
    }
  };

  return (
    <Button
      onClick={moveCurrentLocationFunc}
      $bottom={bottom}
      $isMax={isMax}
      $activeMarker={activeMarker}
    >
      {activeButton ? (
        <NonActiveMoveLocationIcon />
      ) : (
        <ActiveMoveLocationIcon />
      )}
    </Button>
  );
};

export default MoveCurrentLocation;

const checkMax = (
  bottom: number,
  setIsMax: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const windowHeight = window.innerHeight;

  if (bottom >= Math.floor(windowHeight * 0.9)) {
    setIsMax(true);
  } else {
    setIsMax(false);
  }
};

const Button = styled.button<{
  $bottom: number;
  $isMax: boolean;
  $activeMarker: string | null;
}>`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;

  border-radius: 50%;

  position: absolute;
  transition: bottom 0.5s ease;
  bottom: ${({ $isMax, $bottom, $activeMarker }) =>
    $activeMarker ? '125px' : $isMax ? '30px' : `${$bottom - 50}px`};
  right: 5%;
  z-index: 2;

  background-color: var(--color-white);
`;
