import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';

import { store } from '@/store';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';


const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer  theme="dark" />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
