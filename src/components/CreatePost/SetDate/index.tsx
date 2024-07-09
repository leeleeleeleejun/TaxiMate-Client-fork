import { DatePicker } from '@nextui-org/react';
import { now, getLocalTimeZone } from '@internationalized/date';

export default function SetDate() {
  return (
    <div className='w-full max-w-xl flex flex-row gap-4'>
      <DatePicker
        label='Event Date'
        variant='bordered'
        hideTimeZone
        defaultValue={now(getLocalTimeZone())}
        isOpen={true}
      />
    </div>
  );
}
