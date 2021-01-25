import React, { useState, useEffect } from 'react'
import firebase from '../firebase'


const useAuth = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user)
        console.log("L'utilisateur est connecté");
      } else {
        setAuthUser(null)
        console.log("L'utilisateur n'est pas connecté");
      }
    })

    return () => unsubscribe() 
  }, [])

  return authUser
}

export default useAuth
