"use client";
import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}

export default function Input({
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
