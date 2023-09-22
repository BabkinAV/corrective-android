import { Appbar, PaperProvider, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { useState } from 'react';
import Home from './screens/Home';
import DocumentList from './screens/DocumentList';
import { theme } from './theme';
import { StatusBar } from 'expo-status-bar';

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'list'>('home');

  let screen = <Home onSearchButtonPress={() => setCurrentScreen('list')} />;

  if (currentScreen === 'list') {
    screen = <DocumentList />;
  }


  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      <Appbar.Header
        style={{ backgroundColor: '#3c64b1' }}
        dark
        mode="center-aligned"
      >
        {currentScreen === 'home' ? (
          <Appbar.Action icon="menu" onPress={() => {}} />
        ) : (
          <Appbar.BackAction onPress={() => setCurrentScreen('home')} />
        )}

        <Appbar.Content title="Corrective" />
      </Appbar.Header>
      <View style={styles.container}>{screen}</View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
