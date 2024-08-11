import { ReactNode, useState } from 'react';
import { registerDataKeys, registerDataType, stepType } from '@/types';

import CreateMainPage from '@/pages/CreatePostPage/CreateMainPage.tsx';
import SetDatePage from '@/pages/CreatePostPage/SetDatePage.tsx';
import SetPlacePage from '@/pages/CreatePostPage/SetPlacePage.tsx';
import SetPlaceMapPage from '@/pages/CreatePostPage/SetPlaceMapPage.tsx';
import SearchPage from '@/pages/SearchPage.tsx';
import { useCreatePostMutation } from '@/api/localApi.ts';
import { useNavigate } from 'react-router-dom';
import checkDate from '@/utils/checkDate.ts';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<stepType>('main');

  const [registerData, setRegisterData] =
    useState<registerDataType>(initialState);

  const [createPost] = useCreatePostMutation();

  const createPostSubmit = async () => {
    if (!registerData.title) {
      alert('제목을 입력해 주세요.');
      return;
    }

    if (!registerData.explanation) {
      alert('간단 설명을 입력해 주세요.');
      return;
    }

    if (!checkDate(registerData.departureTime)) {
      return;
    }

    const formatDate = new Date(
      new Date(registerData.departureTime).getTime() + 1000 * 60 * 60 * 9
    ).toISOString();

    const result = await createPost({
      ...registerData,
      departureTime: formatDate,
    }).unwrap();

    alert(result.message);
    navigate('/posts/' + result.data.partyId);
  };

  const comeBackMain = () => {
    setStep('main');
  };

  const setRegisterDataFunc = (
    name: registerDataKeys,
    data: string | { longitude: number; latitude: number }
  ) => {
    setRegisterData((prev) => ({ ...prev, [name]: data }));
  };

  const setPlaceMapPageBackHandle = () => {
    if (step === 'originMap') {
      setStep('origin');
    } else {
      setStep('destination');
    }
  };

  return (
    <>
      <Step check={step === 'main'}>
        <CreateMainPage
          registerData={registerData}
          createPostSubmit={createPostSubmit}
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
        <SetPlacePage
          step={step}
          setStep={setStep}
          setRegisterDataFunc={setRegisterDataFunc}
          comeBackMain={comeBackMain}
        />
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
              ? registerData.originLocation
              : registerData.destinationLocation
          }
          setRegisterDataFunc={setRegisterDataFunc}
          comeBackMain={comeBackMain}
          backHandle={setPlaceMapPageBackHandle}
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
  originLocation: {
    latitude: 36.4689627,
    longitude: 127.1408071,
  },
  destinationLocation: {
    latitude: 36.8511811,
    longitude: 127.1511352,
  },
  maxParticipants: '4',
};
