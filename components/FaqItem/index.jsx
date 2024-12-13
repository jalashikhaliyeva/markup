import React, { useEffect, useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import sanitizeHtml from "sanitize-html";
import styles from "./faqSect.module.css";

const Faq = React.forwardRef(({ faqs }, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="" ref={ref}>
      <div className={styles.faqSection}>
        <div className="mx-auto">
          <div className="mx-auto rounded-xl divide-y">
            {faqs.map((item, index) => (
              <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Faq.displayName = "Faq";
export default Faq;

function FaqItem({ item, defaultOpen }) {
  const panelRef = useRef(null);
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
      panelRef.current.style.opacity = "1";
    } else if (panelRef.current) {
      panelRef.current.style.maxHeight = "0px";
      panelRef.current.style.opacity = "0";
    }
  }, [open]);

  return (
    <div className="p-6 mb-4 border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center"
      >
        <span className="text-2xl dark:text-white font-gilroy font-bold flex-1 text-left">
          {item.question}
        </span>
        <span className="ml-4">
          {open ? (
            <FiMinus className="size-7 dark:fill-white fill-black group-hover:fill-black/50" />
          ) : (
            <FiPlus className="size-7 dark:fill-white fill-black group-hover:fill-black/50" />
          )}
        </span>
      </button>
      <div
        ref={panelRef}
        className={`text-lg text-textGray400 font-medium tracking-036 text-grayTextinBox disclosure-panel overflow-hidden transition-all duration-600 ease-in-out transform ${
          open ? "mt-4" : ""
        }`}
        style={{
          maxHeight: open ? `${panelRef.current?.scrollHeight}px` : "0px",
          opacity: open ? "1" : "0",
        }}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.answer) }}
      />
    </div>
  );
}
