import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isOpenAvatar, isEditAvatarPopupOpen] = React.useState(false);
  const [isOpenEditProfile, isEditProfilePopupOpen] = React.useState(false);
  const [isOpenAdd, isAddPlacePopupOpen] = React.useState(false);
  const [isOpenimage, isImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function closeAllPopups() {
    isEditAvatarPopupOpen(false);
    isEditProfilePopupOpen(false);
    isAddPlacePopupOpen(false);
    isImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen(!isOpenAvatar);
  }

  function handleEditProfileClick() {
    isEditProfilePopupOpen(!isOpenEditProfile);
  }

  function handleAddPlaceClick() {
    isAddPlacePopupOpen(!isOpenAdd);
  }

  function handleCardClick(card) {
    isImagePopupOpen(!isOpenimage);
    // console.log(card);
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onImage={handleCardClick} />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpenAvatar} onClose={closeAllPopups}
        children={
          <>
          <label class="popup__form-field">
            <input type="url" class="popup__form-input" name="avatar" placeholder="Аватарка" required id="input-avatar" />
            <span class="popup__form-error input-avatar-error"></span>
          </label>
          <button class="popup__form-button" type="submit">Сохранить</button>
          </>
        }
      />
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpenEditProfile} onClose={closeAllPopups}
        children={
          <>
            <label class="popup__form-field">
              <input type="text" class="popup__form-input" name="name" placeholder="Ваше имя" required id="input-name" minlength="2" maxlength="40" />
              <span class="popup__form-error input-name-error"></span>
            </label>
            <label class="popup__form-field">
              <input type="text" class="popup__form-input" name="about" placeholder="О себе" required id="input-description" minlength="2" maxlength="200" />
              <span class="popup__form-error input-description-error"></span>
            </label>
            <button class="popup__form-button" type="submit">Сохранить</button>
          </>
        }
      />
      <PopupWithForm name="add" title="Новое место" isOpen={isOpenAdd} onClose={closeAllPopups}
        children={
          <>
            <label class="popup__form-field">
            <input type="text" class="popup__form-input" name="name" placeholder="Название" required minlength="2" maxlength="30" id="input-title" />
            <span class="popup__form-error input-title-error"></span>
          </label>
          <label class="popup__form-field">
            <input type="url" class="popup__form-input" name="link" placeholder="Ссылка на картинку" required id="input-link" />
            <span class="popup__form-error input-link-error"></span>
          </label>
          <button class="popup__form-button" type="submit">Создать</button>
        </>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isOpenimage} />
    </div>
  );
}

export default App;
