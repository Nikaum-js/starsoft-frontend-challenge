import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';

import { persistor, store } from '@/store';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';
import { PersistGate } from 'redux-persist/integration/react';


const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
        <ToastContainer  theme="dark" />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
