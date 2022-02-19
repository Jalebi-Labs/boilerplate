import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import signOutUser from '@/client/utils/auth/signOutUser';

type Props = {
  userName: string;
};

export default function UserNavItem(props: Props) {
  const { userName } = props;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
        {userName}
      </MenuButton>
      <MenuList>
        <MenuItem size="sm">Download</MenuItem>
        <MenuDivider />
        <MenuItem
          size="sm"
          onClick={async () => {
            await signOutUser();
          }}
        >
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
