import { stepType, setStep } from '@/types';

import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import SearchBar from '@/components/CreatePost/setPlace/SearchBar.tsx';

const SetPlacePage = ({
  step,
  setStep,
  comeBackMain,
}: {
  step: stepType;
  setStep: setStep;
  comeBackMain: () => void;
}) => {
  const path = step === 'origin';

  const subTitle = (path ? '어디에서 출발' : '어디로 도착') + '하나요?';

  const setStepFunc = () => {
    path ? setStep('searchOrigin') : setStep('searchDestination');
  };

  return (
    <CreatePostChilePageLayout subTitle={subTitle} backHandle={comeBackMain}>
      <SearchBar setStepFunc={setStepFunc} />
    </CreatePostChilePageLayout>
  );
};

export default SetPlacePage;
