import { NavItem } from '@/components/common/Layout/Footer/Footer.style.ts';
import { NavItemContainerProps } from '@/types/props';

const NavItemContainer = ({
  children,
  contentName,
  path,
}: NavItemContainerProps) => {
  return (
    <NavItem to={path}>
      {children}
      {contentName && <span>{contentName}</span>}
    </NavItem>
  );
};

export default NavItemContainer;
