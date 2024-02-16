import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChage,
    formData,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form action="">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(n) => onChage(n)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChage(e)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Invalid email</span>}
        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => onChage(e)}
        />
        {password1.length < 6 && (
          <span>Password must be at least 6 characters</span>
        )}
        {password1.length <= 0 && <span>This field is required</span>}
        {password1 !== password2 && <span>Passwords do not match</span>}

        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChage}
        />
        {password2.length <= 0 && <span>This field is required</span>}
        {password2.length < 6 && (
          <span>Password must be at least 6 characters</span>
        )}
        {password1 !== password2 && <span>Passwords do not match</span>}
        <button
          type="submit"
          onClick={onSubmit}
          disabled={password1 !== password2}
        >
          Create
        </button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
