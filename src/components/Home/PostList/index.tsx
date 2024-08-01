import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import 'react-spring-bottom-sheet/dist/style.css';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import reformatDate from '@/utils/reformatDate.ts';

import {
  PostListContainer,
  ActivePostListContainer,
} from '@/components/Home/PostList/PostList.style.ts';
import PostListItem from '@/components/common/PostListItem';
import { setPostListHeight } from '@/components/Home/PostList/PostListSlice.ts';
import { Post } from '@/types/post.ts';

const PostList = ({
  activeMarker,
  data,
}: {
  activeMarker: string | null;
  data: Post[];
}) => {
  const dispatch = useDispatch();

  const sheetRef = useRef<BottomSheetRef | null>(null);

  if (activeMarker) {
    const targetData = data.filter((item) => item.id === activeMarker)[0];

    return (
      <ActivePostListContainer>
        <PostListItem
          title={targetData.title}
          currentParticipants={targetData.currentParticipants}
          maxParticipants={targetData.maxParticipants}
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
              currentParticipants={post.currentParticipants}
              maxParticipants={post.maxParticipants}
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
