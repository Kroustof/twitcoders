import React from 'react'

const MessageForm = ({ values, user, handleSubmit, handleKeyDown, handleChange, errors }) => {
  return (
    <form className="message-form-container" onSubmit={handleSubmit} >
      <div className="message-form">
        <div>
          <img 
            src={user.photoURL === "https://graph.facebook.com/103490365080806/picture" && require("../images/circle-cropped.png")}
            alt='Profil'
            className='profil-picture'
            />
        </div>
        <textarea 
          value={values.message}
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          name="message" 
          placeholder="Quoi de neuf ?"></textarea>
      </div>

      {errors.message && <p className='error-text'>{errors.message}</p>}
      
      <footer>
        <p>{280 - values.message.length}</p>
        <button 
        type="submit" 
        disabled={values.message.length > 280 || values.message.length === 0}>
        Tweeter
        </button>
      </footer>
    </form>
  )
}

export default MessageForm
