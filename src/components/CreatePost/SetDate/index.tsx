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

const today = new Date();
const minutes = today.getMinutes();

const ceilMinutes = Math.ceil(minutes / 5) * 5;
const now = new Date(today.setMinutes(ceilMinutes));

const initialState = {
  meridiem: now.getHours() < 12 ? 'AM' : 'PM',
  hour: (now.getHours() % 12 || 12).toString(),
  minute: (Math.ceil(now.getMinutes() / 5) * 5).toString(),
};

export default function SetDate() {
  const [pickerValue, setPickerValue] = useState(initialState);

  const [date, setDate] = useState(parseAbsoluteToLocal(now.toISOString()));

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
      <Picker value={pickerValue} onChange={setPickerValue} height={90}>
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
      <SubmitButton>완료</SubmitButton>
    </Container>
  );
}
