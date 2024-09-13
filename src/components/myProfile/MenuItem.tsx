import { MenuItemContainer } from '@/components/myProfile/myProfile.style.ts';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';
const MenuItem = ({
  content,
  SvgIcon,
}: {
  content: string;
  SvgIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <MenuItemContainer>
      <div>
        <SvgIcon />
        {content}
      </div>
      <ArrowRightIcon />
    </MenuItemContainer>
  );
};

export default MenuItem;
