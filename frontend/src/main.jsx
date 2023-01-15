import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/index';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
);
