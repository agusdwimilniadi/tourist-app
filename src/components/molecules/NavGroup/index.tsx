import { useAuthUser, useSignOut } from 'react-auth-kit';
import { DATA_NAVBAR_ITEM } from '../../../utils/constant';
import { INavbarItem } from '../../../utils/interface';
import Button from '../../atoms/Button';
import NavItem from '../../atoms/NavItem';

const NavGroup = () => {
  const authData = useAuthUser();
  const signOut = useSignOut();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
      {DATA_NAVBAR_ITEM.map((item: INavbarItem) => {
        return (
          <NavItem key={item.itemName} to={item.to}>
            {item.itemName}
          </NavItem>
        );
      })}
      <Button
        onClick={() => signOut()}
        variant="secondary"
        className="text-sm bg-white text-black p-2 rounded block md:hidden"
      >
        Logout {authData()?.name}
      </Button>
    </div>
  );
};

export default NavGroup;
