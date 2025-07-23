"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";
import confetti from "canvas-confetti";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/auth");
    } else {
      setUser(JSON.parse(storedUser));
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth");
  };

  if (!user) return null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>🎉 Welcome to the Dashboard, {user.name.first}!</h1>
        <p>You have successfully logged in.</p>
        <button className={styles.logoutButton} onClick={handleLogout}>
          log out
        </button>
      </div>
    </div>
  );
}
