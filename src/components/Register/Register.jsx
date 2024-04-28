import React from "react";
import { DefaultBtn, DefaultInput } from "../components.styles";

function Register({ activeModal, setActiveModal }) {
  return (
    <aside
      onClick={() => setActiveModal(false)}
      id="register"
      className={activeModal ? "register-active" : ""}
    >
      <div onClick={(e) => e.stopPropagation()} className="register__container">
        <i
          onClick={() => setActiveModal(false)}
          id="close-register"
          class="ri-close-line"
        ></i>
        <h1>Register</h1>
        <form>
          <DefaultInput placeholder="E-mail" />
          <DefaultInput placeholder="Password" />
          <DefaultInput placeholder="Confirm Password" />
          <DefaultBtn>Submit</DefaultBtn>
        </form>
      </div>
    </aside>
  );
}

export default Register;
