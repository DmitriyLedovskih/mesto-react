import React from 'react'

function PopupWithForm({isOpen, onClose, name, title, buttonText, children, onSubmit}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button className="popup__close-button" type="button" onClick={() => onClose()}></button>
        <form className="popup__form" name={`form-${name}`}>
          {children}
          <button className="popup__form-button" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;