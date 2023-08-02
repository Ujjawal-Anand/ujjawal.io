import { AppProps } from 'next/app';
import Theme from '../styles/Theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default App;
