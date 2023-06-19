import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${isLiked && "element__like_active"
    }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          aria-label="корзина"
          type="button"
          className="element__trash"
          onClick={handleDeleteClick}
        />
      )}
      <div className="element__group">
        <h3 className="element__title">{card.name}</h3>
        <span>
          <button
            aria-label="лайк"
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="element__number-likes">{card.likes.length}</p>
        </span>
      </div>
    </li>
  );
}
