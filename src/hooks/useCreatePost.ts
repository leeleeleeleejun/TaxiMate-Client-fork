import { useCreatePostMutation } from '@/api/localApi.ts';
import checkDate from '@/utils/checkDate.ts';
import { registerDataType } from '@/types';
import { useNavigate } from 'react-router-dom';

const useCreatePost = (registerData: registerDataType) => {
  const navigate = useNavigate();

  const [createPost] = useCreatePostMutation();

  return async () => {
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
};

export default useCreatePost;
