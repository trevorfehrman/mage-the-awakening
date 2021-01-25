import * as React from 'react'
import 'firebase/functions'
import { useFunctions } from 'reactfire'

import { Input, Button } from '@chakra-ui/react'

const SessionBrowser: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')

  const functions = useFunctions()
  const callable = functions.httpsCallable('emailInvitation')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function sendEmail() {
    console.log('hi')
    callable({ email }).then(console.log).catch(console.log)
  }

  return (
    <div>
      <span>Session Browser</span>
      <Input value={email} onChange={handleChange} placeholder="member@example.com" size="sm" />
      <Button onClick={() => sendEmail()}>Send Invitation</Button>
    </div>
  )
}

export { SessionBrowser }
