import Home from './components/Home';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
	roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    primary: '#512da8',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
