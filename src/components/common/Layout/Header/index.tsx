import { ReactNode } from 'react';
import { Container } from '@/components/common/Layout/Header/Header.style.ts';

const Header = ({
  children,
  paddingX,
  paddingY,
}: {
  children: ReactNode;
  paddingX: number;
  paddingY: number;
}) => {
  return (
    <Container $paddingX={paddingX} $paddingY={paddingY}>
      {children}
    </Container>
  );
};

export default Header;
