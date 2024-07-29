import { DatePickerContainer } from '@/components/CreatePost/setDate/SetDate.style.ts';
import { DatePicker } from '@nextui-org/react';
import { ZonedDateTime } from '@internationalized/date';
import { getLocalTimeZone, today } from '@internationalized/date';

const DatePickerWrap = ({
  date,
  setDate,
}: {
  date: ZonedDateTime;
  setDate: React.Dispatch<React.SetStateAction<ZonedDateTime>>;
}) => {
  return (
    <DatePickerContainer>
      <DatePicker
        label='출발 날짜'
        isOpen={true}
        granularity='day'
        labelPlacement={'outside'}
        value={date}
        onChange={setDate}
        minValue={today(getLocalTimeZone())}
      />
    </DatePickerContainer>
  );
};

export default DatePickerWrap;
