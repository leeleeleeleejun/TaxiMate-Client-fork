import { RadioGroup, Radio } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setMaxParticipants } from '@/components/CreatePost/CreatePostSlice.ts';

export default function NextRadio() {
  //const [selected, setSelected] = React.useState('4');
  const dispatch = useDispatch();

  const maxParticipantsValue = useSelector(
    (state: RootState) => state.createPostSlice.maxParticipants
  );

  const setMaxParticipantsValue = (e: string) => {
    dispatch(setMaxParticipants(e));
  };

  return (
    <RadioGroup
      orientation='horizontal'
      value={maxParticipantsValue}
      onValueChange={setMaxParticipantsValue}
    >
      <Radio value='2'>2명</Radio>
      <Radio value='3'>3명</Radio>
      <Radio value='4'>4명</Radio>
    </RadioGroup>
  );
}
