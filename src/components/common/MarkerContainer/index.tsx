import { Marker, useNavermaps } from 'react-naver-maps';
import { MarkerContainerProps } from '@/types/props';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setActiveMarker } from '@/components/Home/Map/MapSlice.ts';
const MarkerContainer = ({ position, title, id }: MarkerContainerProps) => {
  const naverMaps = useNavermaps();

  const dispatch = useDispatch();
  const activeMarker = useSelector(
    (state: RootState) => state.mapSlice.activeMarker
  );

  return (
    <Marker
      position={new naverMaps.LatLng(position.latitude, position.longitude)}
      title={title}
      icon={{
        content: MarkerIcon(id, title, activeMarker),
      }}
      onClick={(e) => {
        e.pointerEvent.stopPropagation();
        dispatch(setActiveMarker(id));
      }}
    />
  );
};

export default MarkerContainer;

const MarkerIcon = (id: string, place: string, activeMarker: null | string) => {
  const content = place ? `${place} <span>도착</span>` : '도착';
  const isActive =
    activeMarker === null
      ? 'activeMarker'
      : activeMarker === id
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
