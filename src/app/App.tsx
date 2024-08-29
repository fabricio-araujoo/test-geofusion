import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppContent } from '../modules/AppContent';
import { store } from '../store';
import { GlobalFonts, GlobalStyle, theme } from '../theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
