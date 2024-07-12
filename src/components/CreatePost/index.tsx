import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '@/store';

import {
  Container,
  ContentContainer,
  ContentTitle,
  DepartureTimeContainer,
  TextArea,
  TitleInput,
} from '@/components/CreatePost/createPost.style.ts';

import NextRadio from '@/components/common/Radio.tsx';
import { LocationInfo } from '@/components/common/LocationInfo';

import TitleIcon from '@/assets/icons/createPost/title-icon.svg?react';
import ClockIcon from '@/assets/icons/createPost/clock-icon.svg?react';
import LocationPinIcon from '@/assets/icons/createPost/location-pin-icon.svg?react';
import MemberIcon from '@/assets/icons/createPost/member-icon.svg?react';
import ExplainIcon from '@/assets/icons/createPost/explain-icon .svg?react';
import CalendarIcon from '@/assets/icons/createPost/calendar-icon.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

import {
  setExplanation,
  setTitle,
} from '@/components/CreatePost/CreatePostSlice.ts';

const CreatePost = () => {
  const dispatch = useDispatch();

  const titleValue = useSelector(
    (state: RootState) => state.createPostSlice.title
  );

  const setTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const explanationValue = useSelector(
    (state: RootState) => state.createPostSlice.explanation
  );

  const setExplanationValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setExplanation(e.target.value));
  };

  return (
    <Container>
      <ContentWrap
        theme={'제목'}
        explain={'팟을 한 줄로 표현해주세요!'}
        SvgIcon={TitleIcon}
      >
        <TitleInput
          value={titleValue}
          onChange={setTitleValue}
          placeholder={'오후 1시 반쯤 학교에서 역으로'}
        />
      </ContentWrap>
      <ContentWrap theme={'출발 시간'} SvgIcon={ClockIcon}>
        <DepartureTimeContainer to={'/create-post/set-date'}>
          <div>
            <CalendarIcon />
            2024년 7월 3일(월) 오후 9:20 쯤
          </div>
          <ArrowRightIcon />
        </DepartureTimeContainer>
      </ContentWrap>
      <ContentWrap theme={'출도착지'} SvgIcon={LocationPinIcon}>
        <Link to={'/create-post/set-origin'}>
          <LocationInfo
            keyWord={'출발지'}
            title={'공주대학교'}
            subTitle={'충남 천안시 서북구 천안대로 1223-24'}
            inCreate={true}
          />
        </Link>
        <LocationInfo
          keyWord={'도착지'}
          title={'공주대학교'}
          subTitle={'충남 천안시 서북구 천안대로 1223-24'}
          inCreate={true}
        />
      </ContentWrap>
      <ContentWrap theme={'탑승인원'} SvgIcon={MemberIcon}>
        <NextRadio />
      </ContentWrap>
      <ContentWrap
        theme={'간단 설명'}
        explain={'동승자들에게 하고 싶은 말을 자유롭게 작성하세요!'}
        SvgIcon={ExplainIcon}
      >
        <TextArea
          value={explanationValue}
          placeholder={'~~ 해주세요'}
          onChange={setExplanationValue}
        />
      </ContentWrap>
    </Container>
  );
};

export default CreatePost;

const ContentWrap = ({
  theme,
  explain,
  SvgIcon,
  children,
}: {
  theme: string;
  explain?: string;
  SvgIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}) => {
  return (
    <ContentContainer>
      <ContentTitle>
        <div>
          {theme}
          <SvgIcon />
        </div>
        {explain && <p>{explain}</p>}
      </ContentTitle>
      {children}
    </ContentContainer>
  );
};
