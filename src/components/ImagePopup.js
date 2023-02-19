import React from 'react';

function ImagePopup(props) {
  if (props.isOpen) {
    return (
      <div className="popup popup_type_image">
        <div className="popup__container-image">
          <button className="popup__close-button" onClick={() => props.onClose()}></button>
          <figure className="popup__figure">
            <img src={props.card.link} alt={props.card.name} className="popup__figure-image" />
            <figcaption className="popup__figure-label">{props.card.name}</figcaption>
          </figure>
        </div>
      </div>
    )
  }
}

export default ImagePopup;
