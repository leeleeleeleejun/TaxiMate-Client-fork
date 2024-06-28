import { useRef } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { PostListContainer } from '@/components/Home/PostList/PostList.style.ts';
import PostListItem from '@/components/common/PostListItem';

export default function Example() {
  const sheetRef = useRef<BottomSheetRef | null>(null);

  return (
    <>
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
        <PostListContainer>
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
          <PostListItem />
        </PostListContainer>
      </BottomSheet>
    </>
  );
}
