import '@/styles/globals.scss'
import { Provider as ReduxProvider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../../features/redux/store'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </React.Suspense>

  )
}
