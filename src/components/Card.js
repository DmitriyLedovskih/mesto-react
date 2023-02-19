import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
      <article className="card">
        <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
        <button className="card__delete-button" type="button"></button>
        <div className="card__content">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__block">
            <button className="card__like-button" type="button"></button>
            <span className="card__like-counter">{props.card.likes.length}</span>
          </div>
        </div>
      </article>
  )
}

export default Card;