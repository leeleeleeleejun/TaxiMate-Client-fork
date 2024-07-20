import { useState } from 'react';
import { parseAbsoluteToLocal } from '@internationalized/date';

import { setDatePageProps } from '@/types/props';
import reformatDate from '@/utils/reformatDate.ts';
import setDepartureTimeValueFunc from '@/utils/setDepartureTimeValueFunc.ts';

import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import DatePickerWrap from '@/components/CreatePost/setDate/DatePickerWrap.tsx';
import TimePickerWrap from '@/components/CreatePost/setDate/TimePickerWrap.tsx';
import {
  Container,
  DateStringContainer,
} from '@/components/CreatePost/setDate/SetDate.style.ts';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';

const SetDatePage = ({
  value,
  setRegisterDataFunc,
  comeBackMain,
}: setDatePageProps) => {
  const dateDepartureTimeValue = new Date(value);

  const timeInitialState = {
    meridiem: dateDepartureTimeValue.getHours() < 12 ? 'AM' : 'PM',
    hour: (dateDepartureTimeValue.getHours() % 12 || 12).toString(),
    minute: (Math.ceil(dateDepartureTimeValue.getMinutes() / 5) * 5).toString(),
  };

  const [date, setDate] = useState(
    parseAbsoluteToLocal(dateDepartureTimeValue.toISOString())
  );

  const [time, setTime] = useState(timeInitialState);

  const newDate = setDepartureTimeValueFunc(
    date.toString(),
    time
  ).toISOString();

  const submitTimeFunc = () => {
    const targetDate = new Date(newDate);
    const currentDate = new Date();

    if (currentDate < targetDate) {
      setRegisterDataFunc('departureTime', newDate);
      comeBackMain();
    } else {
      alert('올바르지 않은 시각입니다.');
    }
  };

  return (
    <CreatePostChilePageLayout
      subTitle={'언제 출발하나요?'}
      backHandle={comeBackMain}
    >
      <Container>
        <DateStringContainer>{reformatDate(newDate)}</DateStringContainer>
        <DatePickerWrap date={date} setDate={setDate} />
        <TimePickerWrap time={time} setTime={setTime} />
        <SubmitButton onClick={submitTimeFunc}>완료</SubmitButton>
      </Container>
    </CreatePostChilePageLayout>
  );
};

export default SetDatePage;
