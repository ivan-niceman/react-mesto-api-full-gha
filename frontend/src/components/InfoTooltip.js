import good from "../images/icon-good.svg";
import noGood from "../images/icon-no-good.svg";

export default function InfoTooltip({ isOpen, onClose, status }) {
  const statusImg = status ? good : noGood;
  const statusText = status
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container__tooltip">
        <button
          aria-label="закрыть"
          type="button"
          className="popup__button-close"
          onClick={onClose}
        />
        <section className="tooltip__section">
          <img className="tooltip__image" alt="Внимание" src={statusImg} />
          <p className="tooltip__text">{statusText}</p>
        </section>
      </div>
    </section>
  );
}
