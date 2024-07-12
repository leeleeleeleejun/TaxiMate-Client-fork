import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Picker from 'react-mobile-picker';
import { DatePicker } from '@nextui-org/react';
import { parseAbsoluteToLocal } from '@internationalized/date';

import { RootState } from '@/store';
import { SelectionKey } from '@/types';
import { selections } from '@/constants';
import reformatDate from '@/utils/reformatDate.ts';
import setDepartureTimeValueFunc from '@/utils/setDepartureTimeValueFunc.ts';
import { setDepartureTime } from '@/components/CreatePost/CreatePostSlice.ts';

import {
  Container,
  DatePickerContainer,
  DateStringContainer,
} from '@/components/CreatePost/SetDate/SetDate.style.ts';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';

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

  const newDate = setDepartureTimeValueFunc(
    date.toString(),
    timeValue
  ).toISOString();

  return (
    <Container>
      <DateStringContainer>{reformatDate(newDate)}</DateStringContainer>
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
          const targetDate = new Date(newDate);
          const currentDate = new Date();

          if (currentDate < targetDate) {
            dispatch(setDepartureTime(newDate));
            navigate(-1);
          } else {
            alert('올바르지 않은 시각입니다.');
          }
        }}
      >
        완료
      </SubmitButton>
    </Container>
  );
};

export default SetDate;
