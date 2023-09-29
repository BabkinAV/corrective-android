import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetAuth, selectIsAuth } from '../store/reducers/authReducer';
import { theme } from '../theme';
import { RootStackParamList } from '../types/routerTypes';
import DocumentList from './screens/DocumentList';
import Home from './screens/Home';
import Login from './screens/Login';

const Drawer = createDrawerNavigator<RootStackParamList>();

const MainNavigation = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          drawerStyle: {
            backgroundColor: theme.colors.primary,
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#fff',
          headerRight: props =>
            isAuth ? (
              <IconButton
                icon="account"
                iconColor="#fff"
                size={32}
                onPress={() => dispatch(resetAuth())}
              />
            ) : null,
        }}
      >
        <Drawer.Screen
          name="searchUnit"
          component={Home}
          options={{ title: 'Search unit' }}
        />
        <Drawer.Screen
          name="documentList"
          component={DocumentList}
          initialParams={{ unitNumber: '' }}
          options={({ route }) => ({
            title: route.params.unitNumber,
            headerTitleAlign: 'center',
            drawerItemStyle: { height: 0 },
          })}
        />
        <Drawer.Screen
          name="login"
          component={Login}
          options={{ title: 'Login' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

