import React, { useRef } from "react";
import FaqTitle from "../FaqTitle";
import FaQuestions from "../FaqItem";

function Faq() {
  const faqRef = useRef(null);
  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "<p>You can return any item within 30 days of purchase for a full refund.</p>",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "<p>Shipping typically takes between 5-7 business days.</p>",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "<p>Yes, we ship to most countries worldwide. Shipping fees may vary based on location.</p>",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "<p>Once your order is shipped, you'll receive an email with the tracking number and a link to track your package.</p>",
    },
    {
      id: 5,
      question: "Can I change or cancel my order?",
      answer:
        "<p>You can change or cancel your order within 24 hours of placing it by contacting our support team.</p>",
    },
  ];
  return (
    <div className="flex flex-col gap-14">
      {/* <FaqTitle /> */}
      <div className="mx-auto rounded-xl ">
        <h2 className="text-black pt-custom-space font-medium leading-83 flex items-center justify-center text-sliderTitle ">
          Agency questions
        </h2>
        <p className="text-lg leading-6 flex items-center justify-center text-textGray400 pb-custom-space ">
          Learn more about the company and the team behind it.
        </p>
        <FaQuestions faqs={faqs} />
      </div>
    </div>
  );
}

export default Faq;
