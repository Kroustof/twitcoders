import React from 'react'
import CreateMessage from '../components/CreateMessage.jsx'
import Header from '../components/Header.jsx'
import Message from '../components/Message.jsx'
import MessageList from '../components/MessageList.jsx'

import '../styles/App.css'

import firebase, { FirebaseContext } from './../firebase'
import useAuth from './../hooks/useAuth'



const App = () => {
  const user = useAuth()
  // console.log(user)
  return (
    <FirebaseContext.Provider value={{ user, firebase }} >
      <div className='app'>
        <Header />
        <CreateMessage />
        <MessageList />
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
