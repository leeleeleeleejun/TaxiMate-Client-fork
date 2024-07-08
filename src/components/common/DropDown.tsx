import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import EllipsisVerticalIcon from '@/assets/icons/common/ellipsis-vertical-icon.svg?react';

const DropDown = () => {
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
        <DropdownItem key='new' showDivider>
          수정
        </DropdownItem>
        <DropdownItem key='delete' className='text-danger ' color='danger'>
          삭제
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
