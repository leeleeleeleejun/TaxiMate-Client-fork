import { ReactNode } from 'react'
import { NavItem } from '@/components/common/Layout/Footer/Footer.style.ts'

const NavItemContainer = ({
  children,
  contentName,
  path,
}: {
  children: ReactNode
  contentName?: string
  path: string
}) => {
  return (
    <NavItem to={path}>
      {children}
      {contentName && <span>{contentName}</span>}
    </NavItem>
  )
}

export default NavItemContainer
