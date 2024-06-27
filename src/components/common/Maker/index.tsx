import { FC } from 'react';
import {
  BottomTriangle,
  Container,
  ContentBox,
} from '@/components/common/Maker/Maker.style.ts';

const Maker: FC = () => {
  return (
    <Container>
      <ContentBox>
        공주대학교 <span>도착</span>
      </ContentBox>
      <BottomTriangle />
    </Container>
  );
};

export default Maker;
