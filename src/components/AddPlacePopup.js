import React from 'react';
import PopupWithForm from './PopupWithForm';
 
function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handelImageChange(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.obAddPlace({ name, link: image });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} name="add" title="Новое место" isOpen={props.isOpen} onClose={props.isClose} buttonText="Создать"
      >
          <label className="popup__form-field">
            <input type="text" onChange={handleNameChange} className="popup__form-input" name="name" placeholder="Название" required id="input-title" />
            <span className="popup__form-error input-title-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="url" onChange={handelImageChange} className="popup__form-input" name="link" placeholder="Ссылка на картинку" required id="input-link" />
            <span className="popup__form-error input-link-error"></span>
          </label>
      </PopupWithForm>
  );
}

export default AddPlacePopup;
