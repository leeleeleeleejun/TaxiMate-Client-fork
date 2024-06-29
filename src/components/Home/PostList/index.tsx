import { useRef } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import { PostListContainer } from '@/components/Home/PostList/PostList.style.ts';
import PostListItem from '@/components/common/PostListItem';
import { postData } from '@/constants';
import setDate from '@/utils/setDate.ts';

const PostList = () => {
  const sheetRef = useRef<BottomSheetRef | null>(null);

  const data = postData();
  const setDepartureTime = setDate(data[0].departureTime);

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
          {data.map((post) => (
            <PostListItem
              key={post.id}
              title={post.title}
              currentPassengers={post.currentPassengers}
              maxPassengers={post.maxPassengers}
              departureTime={setDepartureTime}
              origin={post.origin}
              destination={post.destination}
            />
          ))}
        </PostListContainer>
      </BottomSheet>
    </>
  );
};

export default PostList;
