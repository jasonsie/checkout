import Layout from '@/views/layout';
import { StylesProvider } from '@mui/styles';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <StylesProvider injectFirst>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StylesProvider>
);

export default appWithTranslation(MyApp);
