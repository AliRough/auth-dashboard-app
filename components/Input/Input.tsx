'use client';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
}

export default function Input({ value, onChange, placeholder, error }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}