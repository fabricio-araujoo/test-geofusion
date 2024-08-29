import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Content } from '../modules/Content';
import { store } from '../store';
import { GlobalFonts, GlobalStyle, theme } from '../theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />

        <Content />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
