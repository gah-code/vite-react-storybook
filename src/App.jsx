// Example: src/App.js
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
