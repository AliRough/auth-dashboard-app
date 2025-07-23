'use client';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}