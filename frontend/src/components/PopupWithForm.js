export default function PopupWithForm({ title, name, children, isOpen, onClose, buttonText, onSubmit }) {

  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button aria-label="закрыть" type="button" className="popup__button-close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form action="#" name={name} onSubmit={onSubmit} className="popup__form">
          {children}
          <button aria-label="сохранить" className="popup__button-save">{buttonText}</button>
        </form>
      </div>
    </section>
  )
}