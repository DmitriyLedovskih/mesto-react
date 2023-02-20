import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [info, setInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getProfileInfo()
      .then(result => {
        setInfo(result);
      })
      .catch(err => {
        console.log(err);
      });
      api.getInitialCards()
        .then(result => {
          setCards(result);
        })
        .catch(err => {
          console.log(err);
        });
  }, [])

  const userAvatar = info.avatar;
  const userName = info.name;
  const userDescription = info.about;

  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__container">
          <button className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватарка профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Интересные места">
        {cards.map(card => (
          <Card card={card} onCardClick={props.onImage} key={card._id} />
        ))}
      </section>
    </main>
  )
}

export default Main;
