import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
	roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3c64b1',
		onSurface: '#000',
		grey100: '#737b7d'
  },
};
