import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SessionBrowser } from 'screens/session-browser.screen'
import { Session } from 'screens/session.screen'

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/session/:sessionId">
        <Session />
      </Route>
      <Route path="/">
        <SessionBrowser />
      </Route>
    </Switch>
  )
}

export { AuthenticatedApp }
