import { useRef } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import Container from '@/components/common/Layout/Layout.style.ts';

export default function Example() {
  const sheetRef = useRef<BottomSheetRef | null>(null);

  return (
    <Container>
      <BottomSheet
        open
        blocking={false}
        // sibling={<CloseExample className='z-10' />}
        ref={sheetRef}
        defaultSnap={({ maxHeight }) => maxHeight / 10}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
        ]}
        expandOnContentDrag={true}
      >
        My awesome content here
      </BottomSheet>
    </Container>
  );
}
