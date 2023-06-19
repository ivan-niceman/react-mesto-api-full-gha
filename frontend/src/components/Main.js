import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-edit" onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Автор"
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <h2 className="profile__subtitle">{currentUser.about}</h2>
        </div>
        <button
          aria-label="редактировать"
          type="button"
          className="profile__button-edit"
          onClick={onEditProfile}></button>
        <button
          aria-label="добавить"
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </main>
  );
}
