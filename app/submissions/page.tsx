"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Film,
  Bell,
  CheckCircle2,
  Clapperboard,
  Video,
  GraduationCap,
  Trophy,
  Users,
  PenTool,
  Camera,
} from "lucide-react";
import { OrnateDivider, CornerFrame, Chakra } from "@/components/Decor/Decor";
import styles from "./submissions.module.css";

const categories = [
  { icon: Trophy, name: "Best Short Film" },
  { icon: Clapperboard, name: "Best Director" },
  { icon: Video, name: "Best Documentary Short" },
  { icon: GraduationCap, name: "Best Student Film" },
  { icon: Camera, name: "Best Cinematography" },
  { icon: PenTool, name: "Best Screenplay" },
  { icon: Users, name: "Best Ensemble Cast" },
  { icon: Film, name: "Best Animation Short" },
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
      <div className="bg-ambient-glow" style={{ top: "0%", left: "25%" }} />

      {/* Launching-soon banner */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className={`${styles.banner} panel-ornate`}
      >
        <CornerFrame />
        <div className={styles.bannerChakra} aria-hidden="true">
          <Chakra size={200} spinning />
        </div>

        <div className={styles.bannerGrid}>
          <div className={styles.bannerContent}>
            <p className="eyebrow">Submissions for Awards</p>
            <h1 className={`${styles.title} heading-cinzel`}>
              Nomination Forms <br />
              <span className="text-gold">Launching Soon</span>
            </h1>
            <p className={styles.description}>
              Get ready to showcase your vision to the world. Submissions for
              Odisha&apos;s First International Short Film Festival open
              shortly — sign up below to be the first to know when the call
              for entries goes live.
            </p>

            {!submitted ? (
              <form className={styles.notifyForm} onSubmit={handleSubmit}>
                <label htmlFor="notify-email" className={styles.srOnly}>
                  Email address for notification
                </label>
                <input
                  id="notify-email"
                  type="email"
                  autoComplete="email"
                  className={styles.input}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                role="status"
              >
                <CheckCircle2 size={26} />
                <p>Thank you! We will notify you as soon as nominations open.</p>
              </motion.div>
            )}
          </div>

          <div className={styles.bannerArt}>
            <Image
              src="/images/trophy-glow.webp"
              alt="The OISFF award — an Odissi dancer raising the Konark chakra"
              width={520}
              height={520}
              className={styles.trophyImg}
            />
          </div>
        </div>
      </motion.section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeading}
        >
          <OrnateDivider className={styles.divider} />
          <h2 className={`${styles.sectionTitle} heading-cinzel`}>
            Award Categories Preview
          </h2>
          <p className={styles.sectionSub}>
            20+ categories for every storyteller — here is a first look.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className={styles.categoryCard}
            >
              <cat.icon size={26} className={styles.categoryIcon} strokeWidth={1.5} />
              <h3 className={`${styles.categoryName} heading-cinzel`}>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
