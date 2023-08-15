// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-NA2tCNe6QKcGZXXa86VBOaI0ctyPCRo',
  authDomain: 'qlcs-part-4-project.firebaseapp.com',
  projectId: 'qlcs-part-4-project',
  storageBucket: 'qlcs-part-4-project.appspot.com',
  messagingSenderId: '568804652414',
  appId: '1:568804652414:web:8d94a920c01dfac1982f2f',
  measurementId: 'G-68F046RLJ9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
