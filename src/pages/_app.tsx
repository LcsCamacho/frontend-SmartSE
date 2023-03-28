import '@/styles/globals.scss'
import { Provider as ReduxProvider } from 'react-redux'
import type { AppProps } from 'next/app'
import { persistor, store } from '../../features/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ReduxProvider store={store}>
        <PersistGate loading={<div>LOADING</div>} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ReduxProvider>
  )
}
