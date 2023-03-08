import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
        <label className="popup__form-field">
          <input ref={avatarRef} type="url" className="popup__form-input" name="avatar" placeholder="Аватарка" required id="input-avatar" />
          <span className="popup__form-error input-avatar-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;