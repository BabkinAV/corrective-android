import 'react-native-gesture-handler';
import { useState } from 'react';

import { PaperProvider, useTheme } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import LogoutModal from './components/modals/LogoutModal';
import MainNavigation from './components/navigation/MainNavigation';
import { store } from './store/store';
import { theme } from './theme';

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = () => setIsModalVisible(false);

  const handleLogoutButtonPress = () => {
    setIsModalVisible(true);
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
        <LogoutModal isModalVisible={isModalVisible} hideModal={hideModal} />
        <MainNavigation onLogoutButtonPress={handleLogoutButtonPress} />
      </PaperProvider>
    </Provider>
  );
}
