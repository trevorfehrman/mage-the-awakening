import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as sgMail from '@sendgrid/mail'

admin.initializeApp()

const API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template
sgMail.setApiKey(API_KEY)

exports.createUserDoc = functions.auth.user().onCreate(user => {
  console.log(user)
  admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

exports.emailInvitation = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'Must be logged in.')
  }

  const msg = {
    to: data.email,
    from: 'trevorfehrman@gmail.com',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      name: data.email,
    },
  }

  await sgMail.send(msg)

  return { success: true }
})
