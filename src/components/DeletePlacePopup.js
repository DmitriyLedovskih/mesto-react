import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup(props) {
  return (
    <PopupWithForm
      onSubmit={props.handleSubmit}
      name="delete"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={props.isLoading ? "Удаляется..." : "Да"}
      onCloseOverlay={props.onCloseOverlay}
    >
      <button className="popup__form-button popup__form-button_type_delete">
        Да
      </button>
    </PopupWithForm>
  );
}

export default DeletePlacePopup;
