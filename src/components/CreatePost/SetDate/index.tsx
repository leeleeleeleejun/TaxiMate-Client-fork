import { useState } from 'react';
import Picker from 'react-mobile-picker';
import { DatePicker } from '@nextui-org/react';
import { parseAbsoluteToLocal } from '@internationalized/date';

import { SelectionKey } from '@/types';
import { selections } from '@/constants';

import {
  Container,
  DatePickerContainer,
} from '@/components/CreatePost/SetDate/SetDate.style.ts';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setDepartureTime } from '@/components/CreatePost/CreatePostSlice.ts';
import { useNavigate } from 'react-router-dom';

const SetDate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const departureTimeValue = useSelector(
    (state: RootState) => state.createPostSlice.departureTime
  );

  const dateDepartureTimeValue = new Date(departureTimeValue);

  const initialState = {
    meridiem: dateDepartureTimeValue.getHours() < 12 ? 'AM' : 'PM',
    hour: (dateDepartureTimeValue.getHours() % 12 || 12).toString(),
    minute: (Math.ceil(dateDepartureTimeValue.getMinutes() / 5) * 5).toString(),
  };

  const [date, setDate] = useState(
    parseAbsoluteToLocal(dateDepartureTimeValue.toISOString())
  );

  const [timeValue, setTimeValue] = useState(initialState);

  return (
    <Container>
      <DatePickerContainer>
        <DatePicker
          label='출발 날짜'
          isOpen={true}
          granularity='day'
          labelPlacement={'outside'}
          value={date}
          onChange={setDate}
        />
      </DatePickerContainer>
      <Picker value={timeValue} onChange={setTimeValue} height={90}>
        {(Object.keys(selections) as SelectionKey[]).map((name) => (
          <Picker.Column key={name} name={name}>
            {selections[name].map((option) => (
              <Picker.Item key={option} value={option}>
                {option}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
      <SubmitButton
        onClick={() => {
          const newDate = setDepartureTimeValueFunc(
            date.toString(),
            timeValue
          ).toISOString();
          dispatch(setDepartureTime(newDate));
          navigate(-1);
        }}
      >
        완료
      </SubmitButton>
    </Container>
  );
};

export default SetDate;

// 시간 데이터 타입 정의
interface TimeData {
  meridiem: string;
  hour: string;
  minute: string;
}

function setDepartureTimeValueFunc(
  dateString: string,
  timeData: TimeData
): Date {
  // 타임존 식별자 제거 (예: [Asia/Seoul])
  const cleanedDateString = dateString.replace(/\[.*\]$/, '');

  // 주어진 날짜 문자열을 Date 객체로 변환
  const date = new Date(cleanedDateString);

  // 시간 데이터에서 시, 분, 오전/오후 값을 추출
  const { meridiem, hour, minute } = timeData;

  // 문자열을 숫자로 변환
  let hourNum = parseInt(hour, 10);
  const minuteNum = parseInt(minute, 10);

  // 오전/오후에 따라 시간 조정
  if (meridiem === 'PM' && hourNum !== 12) {
    hourNum += 12;
  } else if (meridiem === 'AM' && hourNum === 12) {
    hourNum = 0;
  }

  // Date 객체의 시간 설정
  date.setHours(hourNum);
  date.setMinutes(minuteNum);
  date.setSeconds(0); // 필요에 따라 초를 0으로 설정
  date.setMilliseconds(0); // 필요에 따라 밀리초를 0으로 설정

  // 결과 확인
  return date;
}
