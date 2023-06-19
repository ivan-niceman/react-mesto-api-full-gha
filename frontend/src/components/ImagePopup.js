export default function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_image ${card.link && "popup_opened"}`}>
      <figure className="popup__figure">
        <button
          aria-label="закрыть"
          type="button"
          className="popup__button-close popup__button-close-image"
          onClick={onClose}></button>
        <img src={card.link} alt={card.name} className="popup__image-figure" />
        <figcaption className="popup__image-name">{card.name}</figcaption>
      </figure>
    </section>
  );
}
