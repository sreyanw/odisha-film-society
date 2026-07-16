"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Film, Bell, CheckCircle2 } from "lucide-react";
import styles from "./submissions.module.css";

const categories = [
  { name: "Best Short Film" },
  { name: "Best Director" },
  { name: "Best Documentary Short" },
  { name: "Best Student Film" },
];

export default function Submissions() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glow} />

      {/* Submissions Holding Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.banner}
      >
        <span className={styles.badge}>Submissions for Awards</span>
        <h1 className={`${styles.title} heading-cinzel`}>
          Nomination Forms <br />
          <span className="text-gold">Launching Soon</span>
        </h1>
        <p className={styles.description}>
          Get ready to showcase your vision to the world. Submissions for Odisha&apos;s First International Short Film Festival will be opening shortly. Sign up below to be the first to know when the call for entries goes live.
        </p>

        {!submitted ? (
          <form className={styles.notifyForm} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for notification"
            />
            <button type="submit" className="btn-gold">
              <Bell size={16} /> Notify Me
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.successMsg}
          >
            <CheckCircle2 size={24} style={{ marginBottom: "0.5rem" }} />
            <p>Thank you! We will notify you as soon as nominations open.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Categories Preview */}
      <div className={styles.categoriesSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`${styles.sectionTitle} heading-cinzel`}
        >
          Awards Categories Preview
        </motion.h2>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.categoryCard}
            >
              <Film size={24} style={{ color: "var(--gold-primary)", marginBottom: "1rem" }} />
              <h3 className={`${styles.categoryName} heading-cinzel`}>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
