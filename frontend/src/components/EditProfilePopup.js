import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
      <label className="popup__form-lable">
        <input
          placeholder="Имя"
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          id="name-input"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__form-lable">
        <input
          placeholder="Профессия"
          type="text"
          name="about"
          className="popup__input popup__input_type_speciality"
          id="speciality-input"
          required
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error speciality-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
