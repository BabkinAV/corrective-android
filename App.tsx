import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { PaperProvider, useTheme } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import DocumentList from './screens/DocumentList';
import Home from './screens/Home';
import { theme } from './theme';
import { RootStackParamList } from './types';

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: 'white',
						headerTitleAlign: 'center',
						drawerStyle: {
							backgroundColor: theme.colors.primary
						},
						drawerActiveTintColor: '#fff',
						drawerInactiveTintColor: '#fff'
          }}
        >
          <Drawer.Screen name="searchUnit" component={Home} options={{title: 'Search unit'}}/>
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
        </Drawer.Navigator>
      </NavigationContainer>
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
