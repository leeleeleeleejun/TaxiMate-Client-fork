import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';
import EllipsisVerticalIcon from '@/assets/icons/common/ellipsis-vertical-icon.svg?react';

const DropDown = ({
  items,
  danger,
}: {
  items: { name: string; handler: () => void }[];
  danger: string;
}) => {
  return (
    <Dropdown radius='sm' className={'min-w-[70px]'}>
      <DropdownTrigger>
        <button>
          <EllipsisVerticalIcon />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Custom item styles'
        itemClasses={{ base: ['text-center'] }}
      >
        <DropdownSection>
          {items.map((item, index) => (
            <DropdownItem
              key={item.name + index}
              showDivider
              onClick={item.handler}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownItem key='delete' className='text-danger ' color='danger'>
          {danger}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
