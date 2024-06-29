import { Marker, useNavermaps } from 'react-naver-maps';
import { MarkerContainerProps } from '@/types/props';

const MarkerContainer = ({
  position,
  title,
  activeMarker,
  setActiveMarker,
}: MarkerContainerProps) => {
  const naverMaps = useNavermaps();

  return (
    <Marker
      position={new naverMaps.LatLng(position.latitude, position.longitude)}
      title={title}
      icon={{
        content: MarkerIcon(title, activeMarker),
      }}
      onClick={(e) => {
        e.pointerEvent.stopPropagation();
        setActiveMarker(title);
      }}
    />
  );
};

export default MarkerContainer;

const MarkerIcon = (place: string, activeMarker: null | string) => {
  const content = place ? `${place} <span>도착</span>` : '도착';
  const isActive =
    activeMarker === null
      ? 'activeMarker'
      : activeMarker === place
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
