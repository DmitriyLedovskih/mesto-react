import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isimagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPopupOpen);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(!isimagePopupOpen);
    // console.log(card);
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onImage={handleCardClick} />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <>
          <label className="popup__form-field">
            <input type="url" className="popup__form-input" name="avatar" placeholder="Аватарка" required id="input-avatar" />
            <span className="popup__form-error input-avatar-error"></span>
          </label>
        </>
      </PopupWithForm>
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <>
          <label className="popup__form-field">
            <input type="text" className="popup__form-input" name="name" placeholder="Ваше имя" required id="input-name" />
            <span className="popup__form-error input-name-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="text" className="popup__form-input" name="about" placeholder="О себе" required id="input-description" />
            <span className="popup__form-error input-description-error"></span>
          </label>
        </>
      </PopupWithForm>
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPopupOpen} onClose={closeAllPopups} buttonText="Создать"
      >
        <>
          <label className="popup__form-field">
            <input type="text" className="popup__form-input" name="name" placeholder="Название" required id="input-title" />
            <span className="popup__form-error input-title-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="url" className="popup__form-input" name="link" placeholder="Ссылка на картинку" required id="input-link" />
            <span className="popup__form-error input-link-error"></span>
          </label>
        </>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isimagePopupOpen} />
    </div>
  );
}

export default App;
