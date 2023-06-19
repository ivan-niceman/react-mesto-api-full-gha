import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"change-avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}>
      <label className="popup__form-lable">
        <input
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_speciality popup__input_type_link"
          id="avatar-link-input"
          ref={avatarRef}
          required
        />
        <span className="popup__input-error avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
