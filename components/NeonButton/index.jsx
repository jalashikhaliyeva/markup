// NeonButton.jsx

import styles from "./NeonButton.module.css";

export default function NeonButton({ children, onClick, icon }) {
  return (
    <button className={`group ${styles.neonButton}`} onClick={onClick}>
      <span className={styles.buttonContent}>
        <span
          className={`transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-0.5 ${styles.buttonText}`}
        >
          {children}
        </span>
        {icon && (
          <span
            className={`transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-0.5 ${styles.buttonIcon}`}
          >
            {icon}
          </span>
        )}
      </span>
    </button>
  );
}
