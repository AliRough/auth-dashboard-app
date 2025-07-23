"use client";
import Link from "next/link";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaExclamationTriangle size={48} color="#ef4444" />
        <h1>Page Not Found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link className={styles.backLink} href="/">
          <FaHome size={16} style={{ marginRight: "0.5rem" }} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
