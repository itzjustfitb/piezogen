import React from "react";

function ContactInfo() {
  const contacts = [
    {
      image: "ri-map-pin-line",
      title: "Address:",
      infos: ["Baku, Azerbaijan"],
    },
    {
      image: "ri-mail-line",
      title: "Email:",
      infos: ["tereqqiklub@gmail.com"],
    },
    {
      image: "ri-phone-line",
      title: "Phone:",
      infos: ["+994 51 580 49 89"],
    },
  ];

  return (
    <aside className="contact__info" data-aos="fade-right">
      {contacts.map((contact, index) => {
        return (
          <div key={index} className="contact__info-row">
            <div className="contact__info-logo">
              <i className={contact.image}></i>
            </div>
            <div className="contact__info-content">
              <h1>{contact.title}</h1>
              {contact.infos.map((info, index) => (
                <a key={index} href="#">
                  {info}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default ContactInfo;
