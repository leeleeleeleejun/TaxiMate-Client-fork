import { ReactNode, useState } from 'react';
import { registerDataKeys, stepType } from '@/types';

import CreateMainPage from '@/pages/CreatePostPage/CreateMainPage.tsx';
import SetDatePage from '@/pages/CreatePostPage/SetDatePage.tsx';
import SetPlacePage from '@/pages/CreatePostPage/SetPlacePage.tsx';
import SetPlaceMapPage from '@/pages/CreatePostPage/SetPlaceMapPage.tsx';
import SearchPage from '@/pages/SearchPage.tsx';

const CreatePostPage = () => {
  const [step, setStep] = useState<stepType>('main');

  const [registerData, setRegisterData] = useState(initialState);

  const comeBackMain = () => {
    setStep('main');
  };

  const setRegisterDataFunc = (
    name: registerDataKeys,
    data: string | { lat: number; lng: number }
  ) => {
    setRegisterData((prev) => ({ ...prev, [name]: data }));
  };

  return (
    <>
      <Step check={step === 'main'}>
        <CreateMainPage
          registerData={registerData}
          setRegisterDataFunc={setRegisterDataFunc}
          setStep={setStep}
        />
      </Step>
      <Step check={step === 'time'}>
        <SetDatePage
          value={registerData.departureTime}
          setRegisterDataFunc={setRegisterDataFunc}
          comeBackMain={comeBackMain}
        />
      </Step>
      <Step check={step === 'origin' || step === 'destination'}>
        <SetPlacePage step={step} setStep={setStep} />
      </Step>
      <Step check={step === 'searchOrigin' || step === 'searchDestination'}>
        <SearchPage
          step={step}
          setStep={setStep}
          setRegisterDataFunc={setRegisterDataFunc}
        />
      </Step>
      <Step check={step === 'originMap' || step === 'destinationMap'}>
        <SetPlaceMapPage
          step={step}
          value={
            step === 'originMap'
              ? registerData.origin
              : registerData.destination
          }
          setRegisterDataFunc={setRegisterDataFunc}
          comeBackMain={comeBackMain}
        />
      </Step>
    </>
  );
};

export default CreatePostPage;

const Step = ({ check, children }: { check: boolean; children: ReactNode }) => {
  if (check) {
    return children;
  }

  return null;
};

// registerData 초기상태 데이터
const today = new Date();
const minutes = today.getMinutes();

const ceilMinutes = Math.ceil(minutes / 5) * 5;
const departureTime = new Date(today.setMinutes(ceilMinutes)).toISOString();
const initialState = {
  title: '',
  departureTime,
  explanation: '',
  origin: {
    lat: 36.3418454,
    lng: 127.5272031,
  },
  destination: {
    lat: 36.3418454,
    lng: 127.5272031,
  },
  maxParticipants: '4',
};
