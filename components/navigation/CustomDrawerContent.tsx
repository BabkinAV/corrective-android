import React from 'react';

import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList
} from '@react-navigation/drawer';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectIsAuth } from '../../store/reducers/authReducer';

const CustomDrawerContent = ({
  onLogoutPress,
  ...props
}: { onLogoutPress: () => void } & DrawerContentComponentProps) => {
  const handleOnLogoutPress = () => {
    props.navigation.closeDrawer();
    onLogoutPress();
  };

  const isAuth = useAppSelector(selectIsAuth);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isAuth && (
        <DrawerItem
          label="Logout"
          onPress={handleOnLogoutPress}
          inactiveTintColor="#fff"
        />
      )}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
