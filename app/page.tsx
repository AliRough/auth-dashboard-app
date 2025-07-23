"use client";
import Link from "next/link";
import styles from "./Home.module.scss";
import { FaHome, FaArrowRight, FaSignInAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroCard}>
        <FaHome size={40} color="#4f46e5" />
        <h1>Welcome to the App</h1>
        <p>
          This is a simple authentication flow demo using Next.js + TypeScript +
          SCSS.
        </p>
        <div className={styles.links}>
          <Link className={styles.link} href="/dashboard">
            Go to Dashboard{" "}
            <FaArrowRight size={14} style={{ marginLeft: "0.5rem" }} />
          </Link>
          <Link className={styles.link} href="/auth">
            Login <FaSignInAlt size={14} style={{ marginLeft: "0.5rem" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
