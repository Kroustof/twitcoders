import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './config'


class Firebase {
  constructor () {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    // this.googleProvider = new app.auth.GoogleAuthProvider()
    // this.guithubProvider = new app.auth.GithubAuthProvider()
    this.db = app.firestore()
  }
  //Original
  /*login = async (provider) => {
    const { user } = await this.auth.signInWithPopup(this.facebookProvider)
    console.log(user);    
  }*/

  login = async (provider) => {
    const { user } = await this.auth.signInWithPopup(this[`${provider}Provider`])
  }

  logout = async () => await this.auth.signOut()
}

const firebase = new Firebase()
export default firebase