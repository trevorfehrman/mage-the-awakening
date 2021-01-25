import * as React from 'react'

import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const firebaseConfig = {
  apiKey: 'AIzaSyDhEhi-GDSUOy2Mv63GT304O9WD-9cQMoY',
  authDomain: 'mage-the-awakening.firebaseapp.com',
  projectId: 'mage-the-awakening',
  storageBucket: 'mage-the-awakening.appspot.com',
  messagingSenderId: '804455532498',
  appId: '1:804455532498:web:1d27e5d77329d5a8afea0b',
  measurementId: 'G-6SS85Q8BGX',
}

const theme = extendTheme({
  colors: {
    brand: {
      green: '#41e694',
      yellow: '#fff178',
    },
  },
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<div>Loading...</div>} traceId={'loading-app-status'}>
        <ChakraProvider theme={theme} resetCSS>
          <Router>{children}</Router>
        </ChakraProvider>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}

export { AppProviders }
