import React, { useState, useEffect } from 'react'

const useForm = (initialState, validate, next) => {  
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const isErrors = Object.keys(errors).length !== 0
      console.log(isErrors);
      console.log(errors);
      if (isErrors) {
        setIsSubmitting(false)
        console.log('il y a une erreur');
      } else {
        next()
        setIsSubmitting(false)
        setValues(initialState)
      }
    }
  }, [errors, next, isSubmitting, initialState])

  // Fonction Submit quand on presse ENTRER
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      next()
    }
  }
  
  // Contrôle du texteArea qui mettra à jour le state
  const handleChange = event => {
    event.persist()
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }))
  }

  // Function Submit
  const handleSubmit = event => {
    event.preventDefault()
    const errors = validate(values)
    setErrors(errors)
    setIsSubmitting(true)
  }

  return (
    { handleSubmit, handleKeyDown, handleChange, values, errors }
  )

}

export default useForm
