import React, { useState } from "react";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "Question 1",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
    },
    {
      question: "Question 2",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
    },
    {
      question: "Question 3",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
    },
    {
      question: "Question 4",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias, deleniti.",
    },
  ];

  return (
    <section id="faq">
      <div className="faq__container">
        <div className="faq__top">
          <h1>FAQ</h1>
          <p>Frequently asked questions</p>
        </div>
        <div className="faq__bottom">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__row ${activeFaq === index ? "active-faq" : ""}`}
            >
              <div
                onClick={() => {
                  setActiveFaq(index);
                  if (index === activeFaq) {
                    setActiveFaq(null);
                  }
                }}
                className="faq__dropdown-main"
              >
                <p>{faq.question}</p>
                <i class="ri-add-line"></i>
              </div>
              <div className="faq__dropdown">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
