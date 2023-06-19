import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isLoading,
}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name={"new-card"}
      title={"Новое место"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
      <label className="popup__form-lable">
        <input
          type="text"
          name="name"
          placeholder="Название"
          className="popup__input popup__input_type_name popup__input_type_name-card"
          id="name-image-input"
          required
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
        <span className="popup__input-error name-image-input-error"></span>
      </label>
      <label className="popup__form-lable">
        <input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_speciality popup__input_type_link"
          id="image-link-input"
          required
          onChange={handleLinkChange}
          value={link}
        />
        <span className="popup__input-error image-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
