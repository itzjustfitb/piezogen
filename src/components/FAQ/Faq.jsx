import React, { useState } from "react";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "What is piezoelectric?",
      answer:
        "Piezoelectric is a material that converts mechanical energy into electrical energy. This change causes electric fields outside the material. Piezoelectric sensors can accurately detect small pressures and generate electrical energy. These practical and important materials feature a fascinating and unique physical property: they react to mechanical stress by generating a voltage. It was back in the 1880s that scientists first detected this phenomenon in certain types of crystals.",
    },
    {
      question: "Where it can be applied?",
      answer:
        "Piezoelectric materials have become an important technology used in many different industries today. Our job is to install our products mainly in places with high human density (educational institutions, gyms, private facilities).",
    },
    {
      question: "Where can we use the converted energy?",
      answer:
        "The use of the energy obtained by applying the method depends entirely on the requirements and can be used for different purposes.",
    },
  ];

  return (
    <section id="faq">
      <div className="faq__container">
        <div className="faq__top" data-aos="fade-up">
          <h1>FAQ</h1>
          <p>Frequently asked questions</p>
        </div>
        <div className="faq__bottom" data-aos="fade-up">
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
