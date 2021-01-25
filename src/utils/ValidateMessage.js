const validateMessage = values => {
  const errors = {}

  if (!values.message) return errors.message = 'Le message est requis'
  if (values.message.length > 280) return errors.message = 'Le message ne doit pas excéder 280 caractères'
  return errors
}

export default validateMessage