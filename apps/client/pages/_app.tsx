import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider } from 'react-redux';
import { api, wrapper } from '@liftlogic/data-access';
import { SITE_NAME } from '../utils/constants';

const CustomApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Provider store={store}>
        <main className="app">
          <Component {...props.pageProps} />
        </main>
      </Provider>
    </>
  );
};

CustomApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context: AppContext) => {
    const pageProps = await App.getInitialProps(context);

    // Get site id
    store.dispatch(
      api.endpoints.GetSiteByName.initiate({
        title: SITE_NAME,
      })
    );
    await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

    const site = api.endpoints.GetSiteByName.select({
      title: SITE_NAME,
    })(store.getState()).data?.Sites?.docs?.[0];

    return {
      ...pageProps,
      pageProps: {
        ...pageProps.pageProps,
        site,
      },
    };
  }
);

export default CustomApp;
