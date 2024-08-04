import { Marker, useNavermaps } from 'react-naver-maps';

import { MarkerContainerProps } from '@/types/props';

const MarkerContainer = ({
  position,
  title,
  id,
  anchor,
  showPlace,
  activeMarker,
  setActiveMarker,
}: MarkerContainerProps) => {
  const naverMaps = useNavermaps();

  const handleClick = (e: naver.maps.PointerEvent) => {
    if (showPlace && setActiveMarker) {
      e.pointerEvent.stopPropagation();
      setActiveMarker(id);
    }
  };

  return (
    <Marker
      position={new naverMaps.LatLng(position.latitude, position.longitude)}
      title={title}
      icon={{
        content: MarkerIcon(id, title, activeMarker, showPlace),
        anchor: [anchor[0] >= 72 ? 72 : anchor[0], anchor[1]],
      }}
      onClick={handleClick}
    />
  );
};

export default MarkerContainer;

const MarkerIcon = (
  id: string,
  title: string,
  activeMarker: null | string,
  showPlace: boolean
) => {
  const content = showPlace ? `<div>${title}</div><span>도착</span>` : title;

  const isActive =
    activeMarker === null || activeMarker === id
      ? 'activeMarker'
      : 'nonActiveMarker';

  return `
    <div class="marker-icon-container ${isActive}">
      <div class="marker-content-box">
        ${content}
      </div>
      <div class="marker-bottom-triangle"></div>
    </div>
  `;
};
