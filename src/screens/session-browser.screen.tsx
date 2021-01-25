import * as React from 'react'
import 'firebase/functions'
import 'firebase/firestore'
import { useFunctions, useUser, useFirestoreCollectionData, useFirestore } from 'reactfire'

import { Input, Button } from '@chakra-ui/react'

const SessionBrowser: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')

  const user = useUser()
  const sessionsQuery = useFirestore().collection('sessions').where('invitations', 'array-contains', user.data.email)
  const sessions = useFirestoreCollectionData(sessionsQuery)
  console.log(sessions)

  const functions = useFunctions()
  const callable = functions.httpsCallable('emailInvitation')
  function sendEmail() {
    console.log('hi')
    callable({ email }).then(console.log).catch(console.log)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
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
