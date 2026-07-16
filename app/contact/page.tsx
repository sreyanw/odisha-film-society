"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glow} />

      {/* Header */}
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.badge}
        >
          Connect
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          Contact Us
        </motion.h1>
      </header>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Info details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.infoDetails}
        >
          <h2 className={`${styles.infoTitle} heading-cinzel`}>Get In Touch</h2>
          <p className={styles.infoDesc}>
            Have questions about the festival submissions, nomination rules, screening schedule, or partnership opportunities? Reach out to us, and our team will get back to you as soon as possible.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Email Us</p>
                <p className={styles.infoValue}>
                  <a
                    href="mailto:hello@odishafilmsociety.in"
                    className={styles.mailLink}
                  >
                    hello@odishafilmsociety.in
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Main Venue</p>
                <p className={styles.infoValue}>
                  Rabindra Mandap, Bhubaneswar, Odisha, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.formWrapper}
        >
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.successMsg}
            >
              <CheckCircle2 size={48} style={{ color: "var(--gold-primary)" }} />
              <h3 className={`${styles.successTitle} heading-cinzel`}>
                Message Sent
              </h3>
              <p className={styles.successText}>
                Thank you for reaching out. We have received your message and will get back to you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
