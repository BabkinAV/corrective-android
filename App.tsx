import 'react-native-gesture-handler';
import { PaperProvider, useTheme } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { theme } from './theme';
import MainNavigation from './components/MainNavigation';

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
        <MainNavigation />
      </PaperProvider>
    </Provider>
  );
}
