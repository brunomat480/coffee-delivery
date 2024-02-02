import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { ProductsContextsProvider } from './context/ProductsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextsProvider>
          <Router />
        </ProductsContextsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

  );
}
