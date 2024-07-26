import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import UsageHistoryIcon from '@/assets/icons/header/usage-history-icon.svg?react';

const UsageHistoryPage = () => {
  return (
    <>
      <Header>
        <HeaderItem>
          이용내역
          <UsageHistoryIcon />
        </HeaderItem>
      </Header>
    </>
  );
};

export default UsageHistoryPage;
