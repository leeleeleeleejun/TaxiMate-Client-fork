import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import { RootState } from '@/store';
import { postData } from '@/constants';
import reformatDate from '@/utils/reformatDate.ts';

import {
  PostListContainer,
  ActivePostListContainer,
} from '@/components/Home/PostList/PostList.style.ts';
import PostListItem from '@/components/common/PostListItem';
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
          departureTime={reformatDate(targetData.departureTime)}
          origin={targetData.origin}
          destination={targetData.destination}
          activePostList
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
        defaultSnap={() => 80}
        snapPoints={({ maxHeight }) => [
          Math.floor(maxHeight * 0.9),
          Math.floor(maxHeight * 0.4),
          80,
        ]}
        expandOnContentDrag
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
              departureTime={reformatDate(post.departureTime)}
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
