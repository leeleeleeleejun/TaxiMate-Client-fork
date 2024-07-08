import React from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';

export default function NextRadio() {
  const [selected, setSelected] = React.useState('4명');

  return (
    <RadioGroup
      orientation='horizontal'
      value={selected}
      onValueChange={setSelected}
    >
      <Radio value='2명'>2명</Radio>
      <Radio value='3명'>3명</Radio>
      <Radio value='4명'>4명</Radio>
    </RadioGroup>
  );
}
