import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import styles from "./faqSect.module.css";
import React, { useEffect, useState, useRef } from "react";
import sanitizeHtml from "sanitize-html";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const Faq = React.forwardRef(({ faqs }, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="" ref={ref}>
      {/* <h3 className="pb-10 text-center font-gilroy text-2xl  md:text-3xl font-medium text-textSecondaryDefault">
        Sualın var?
      </h3> */}
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
    <div className="p-6 mb-4 border-b border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center"
      >
        <span className="text-2xl font-gilroy font-bold flex-1 text-left">
          {item.question}
        </span>
        <span className="ml-4">
          {open ? (
            <FiMinus className="size-7 fill-black group-hover:fill-black/50" />
          ) : (
            <FiPlus className="size-7 fill-black group-hover:fill-black/50" />
          )}
        </span>
      </button>
      <div
        ref={panelRef}
        className={`text-lg text-textGray400 font-normal tracking-036 text-grayTextinBox disclosure-panel overflow-hidden transition-all duration-600 ease-in-out transform`}
        style={{
          maxHeight: open ? `${panelRef.current?.scrollHeight}px` : "0px",
          opacity: open ? "1" : "0",
        }}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.answer) }}
      />
    </div>
  );
}
