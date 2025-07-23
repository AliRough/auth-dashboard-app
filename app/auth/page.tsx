"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "./AuthForm.module.scss";
import { FaSignInAlt } from "react-icons/fa";

const validatePhone = (phone: string) => /^09\d{9}$/.test(phone);

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("Invalid phone number");
      return;
    }

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();

    localStorage.setItem("user", JSON.stringify(data.results[0]));
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Sign in to your account</h2>
        <div className={styles.inputGroup}>
          <Input
            value={phone}
            onChange={setPhone}
            placeholder="Enter your phone number"
            error={error}
          />
        </div>
        <Button onClick={handleLogin}>
          <FaSignInAlt style={{ marginRight: "0.5rem" }} />
          Sign In
        </Button>
      </div>
    </div>
  );
}
