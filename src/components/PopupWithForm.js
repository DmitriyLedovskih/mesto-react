import React from 'react'

function PopupWithForm(props) {
  if (props.isOpen) {
    return (
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__close-button" type="button" onClick={() => props.onClose()}></button>
          <form className="popup__form" name={`form-${props.name}`} novalidate>
            {props.children}
          </form>
        </div>
      </div>
    )
  }
}

export default PopupWithForm;