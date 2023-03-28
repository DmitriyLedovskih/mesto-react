import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onCloseOverlay={props.onCloseOverlay}
    >
      <label className="popup__form-field">
        <input
          ref={avatarRef}
          type="url"
          className="popup__form-input"
          name="avatar"
          placeholder="Аватарка"
          required
          id="input-avatar"
        />
        <span className="popup__form-error input-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
