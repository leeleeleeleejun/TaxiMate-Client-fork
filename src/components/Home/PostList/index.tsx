import { useRef } from 'react';
import { useSelector } from 'react-redux';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import { RootState } from '@/store';
import { postData } from '@/constants';
import setDate from '@/utils/setDate.ts';

import {
  PostListContainer,
  ActivePostListContainer,
} from '@/components/Home/PostList/PostList.style.ts';
import PostListItem from '@/components/common/PostListItem';
import { useDispatch } from 'react-redux';
import { setPostListHeight } from '@/components/Home/PostList/PostListSlice.ts';

const PostList = () => {
  const dispatch = useDispatch();

  const sheetRef = useRef<BottomSheetRef | null>(null);
  const data = postData();

  const activeMarker = useSelector(
    (state: RootState) => state.mapSlice.activeMarker
  );

  if (activeMarker) {
    const targetData = data.filter((item) => item.id === activeMarker)[0];

    return (
      <ActivePostListContainer>
        <PostListItem
          title={targetData.title}
          currentPassengers={targetData.currentPassengers}
          maxPassengers={targetData.maxPassengers}
          departureTime={setDate(targetData.departureTime)}
          origin={targetData.origin}
          destination={targetData.destination}
        />
      </ActivePostListContainer>
    );
  }

  return (
    <>
      <BottomSheet
        open
        blocking={false}
        ref={sheetRef}
        defaultSnap={({ minHeight }) => minHeight * 0.1}
        snapPoints={({ maxHeight, minHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight * 0.38,
          minHeight * 0.1,
        ]}
        expandOnContentDrag={true}
        onSpringEnd={() =>
          dispatch(setPostListHeight(sheetRef.current?.height))
        }
      >
        <PostListContainer>
          {data.map((post) => (
            <PostListItem
              key={post.id}
              title={post.title}
              currentPassengers={post.currentPassengers}
              maxPassengers={post.maxPassengers}
              departureTime={setDate(post.departureTime)}
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
