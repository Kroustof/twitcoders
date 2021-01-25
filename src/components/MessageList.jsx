import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from './../firebase'
import Message from './Message'

const MessageList = () => {
  const { firebase } = useContext(FirebaseContext)
  const [messages, setMessages] = useState([])


  useEffect(() => {
    const getMessages = () => {
      firebase
        .db
        .collection("messages")
        .orderBy('createAt', 'desc')
        .onSnapshot((snapshot) => {
          const messages = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          setMessages(messages)
        })
    }
    return getMessages()
  }, [firebase])


  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList
