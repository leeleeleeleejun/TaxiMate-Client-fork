import SetDate from '@/components/CreatePost/SetDate';
import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import { DateStringContainer } from '@/components/CreatePost/SetDate/SetDate.style.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import reformatDate from '@/utils/reformatDate.ts';

const SetDatePage = () => {
  const departureTimeValue = useSelector(
    (state: RootState) => state.createPostSlice.departureTime
  );

  return (
    <CreatePostChilePageLayout subTitle={'언제 출발하나요?'}>
      <DateStringContainer>
        {reformatDate(departureTimeValue)}
      </DateStringContainer>
      <SetDate />
    </CreatePostChilePageLayout>
  );
};

export default SetDatePage;
