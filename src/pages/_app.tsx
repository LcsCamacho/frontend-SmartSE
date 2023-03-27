import '@/styles/globals.scss'
import { Provider as ReduxProvider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../../features/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}
