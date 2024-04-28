import React from "react";
import {
  DefaultBtn,
  DefaultInput,
  DefaultTextArea,
} from "../components.styles";

function ContactInputs() {
  return (
    <div className="contact__inputs" data-aos="fade-left">
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Name" type="text" />
        <DefaultInput placeholder="E-mail" type="text" />
      </div>
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Number" type="number" />
        <DefaultInput placeholder="Subject" type="subject" />
      </div>

      <DefaultTextArea placeholder="Message" />
      <DefaultBtn>Submit</DefaultBtn>
    </div>
  );
}

export default ContactInputs;
