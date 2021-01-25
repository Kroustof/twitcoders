import React, { useContext } from 'react'
import { FirebaseContext } from './../firebase'
import useForm from '../hooks/useForm'
import validateMessage from '../utils/ValidateMessage'
import MessageForm from './MessageForm'

const INITIAL_STATE = {
  message: ''
}

const CreateMessage = () => {
  const { user, firebase } = useContext(FirebaseContext)
  const handleCreateMessage = () => {
    const { message } = values
    const newMessage = {
      message,
      postedBy: {
        id: user.uid,
        name: user.displayName,
      },
      likes: [],
      createAt: Date.now(),
      photo: user.photoURL,
    }
    console.log(newMessage);
    firebase.db.collection('messages').add(newMessage)

  }

  
  const { handleSubmit, handleKeyDown, handleChange, values, errors } = useForm(
    INITIAL_STATE, 
    validateMessage,
    handleCreateMessage)
  return (
    user && (
      <MessageForm
      handleSubmit={handleSubmit} 
      handleKeyDown={handleKeyDown}
      handleChange={handleChange} 
      values={values}
      errors={errors}
      user={user}
    />)
  )
}

export default CreateMessage
