import * as React from 'react'
import {} from 'react'
import ReactDOM from 'react-dom'
import { AuthCheck } from 'reactfire'
import './index.css'
import { AppProviders } from 'context'
import { AuthenticatedApp } from 'authenticated-app'
import { Login } from 'screens/login.screen'
import 'firebase/auth'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <AuthCheck fallback={<Login />}>{<AuthenticatedApp />}</AuthCheck>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
)
