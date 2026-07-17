"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
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
      <div className="bg-ambient-glow" style={{ top: "-5%", right: "20%" }} />

      {/* Header */}
      <header className={styles.header}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Connect
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <OrnateDivider className={styles.divider} />
        </motion.div>
      </header>

      {/* Content */}
      <div className={styles.contentGrid}>
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={styles.infoDetails}
        >
          <h2 className={`${styles.infoTitle} heading-cinzel`}>Get in Touch</h2>
          <p className={styles.infoDesc}>
            Questions about festival submissions, nomination rules, screening
            schedules, or partnership opportunities? Write to us and our team
            will get back to you as soon as possible.
          </p>

          <div className={styles.infoCards}>
            <div className={`${styles.infoCard} panel-ornate`}>
              <div className={styles.iconWrapper}>
                <Mail size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className={styles.infoLabel}>Email Us</p>
                <a
                  href="mailto:hello@odishafilmsociety.in"
                  className={styles.mailLink}
                >
                  hello@odishafilmsociety.in
                </a>
              </div>
            </div>

            <div className={`${styles.infoCard} panel-ornate`}>
              <div className={styles.iconWrapper}>
                <MapPin size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className={styles.infoLabel}>Main Venue</p>
                <p className={styles.infoValue}>
                  Rabindra Mandap, Bhubaneswar, Odisha, India
                </p>
              </div>
            </div>

            <div className={`${styles.infoCard} panel-ornate`}>
              <div className={styles.iconWrapper}>
                <Clock size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className={styles.infoLabel}>Festival Dates</p>
                <p className={styles.infoValue}>
                  Events from 21 July 2026 · Main event 21 October 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`${styles.formWrapper} panel-ornate`}
        >
          <CornerFrame />
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={styles.input}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className={styles.input}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                  Message <span aria-hidden="true">*</span>
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

              <button
                type="submit"
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.successMsg}
              role="status"
            >
              <CheckCircle2 size={48} className={styles.successIcon} />
              <h3 className={`${styles.successTitle} heading-cinzel`}>
                Message Sent
              </h3>
              <p className={styles.successText}>
                Thank you for reaching out. We have received your message and
                will get back to you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
