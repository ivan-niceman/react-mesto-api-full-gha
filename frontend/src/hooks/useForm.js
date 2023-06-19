import React from 'react';

export default function useForm() {
  const [formValue, setFormValue] = React.useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const input = evt.target;
    setFormValue({
      ...setFormValue,
      [input.name]: input.value,
    });
  };

  return { formValue, handleChange };
}