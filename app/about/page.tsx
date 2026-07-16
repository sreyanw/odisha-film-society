"use client";

import { motion } from "framer-motion";
import { Film, MapPin, Calendar, Compass, Shield } from "lucide-react";
import styles from "./about.module.css";

export default function About() {
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
          Our Story
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          About The Society
        </motion.h1>
      </header>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.story}
        >
          <h2 className={`${styles.subtitle} heading-cinzel`}>
            odishafilmsociety.in
          </h2>
          <p className={styles.paragraph}>
            Established with a vision to nurture and celebrate the art of visual storytelling, the **Odisha Film Society** has been at the forefront of promoting cinematic expression in the region. We believe that cinema is a universal language that transcends boundaries, cultures, and differences.
          </p>
          <p className={`${styles.paragraph} ${styles.highlightText}`}>
            &ldquo;Our mission is to cultivate a vibrant community of filmmakers, visual artists, and cinema lovers, providing them with platforms to collaborate, learn, and showcase their craft.&rdquo;
          </p>
          <p className={styles.paragraph}>
            This year, we are proud to present **Odisha&apos;s First International Short Film Festival**. By creating a bridge between local talents and global filmmakers, the festival aims to inspire creative dialogues and showcase the power of short-format cinema in expressing deep human narratives.
          </p>
        </motion.div>

        {/* Sidebar Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.infoPanel}
        >
          <h3 className={`${styles.panelTitle} heading-cinzel`}>Festival At A Glance</h3>
          <div className={styles.milestones}>
            <div className={styles.milestoneItem}>
              <div className={styles.iconWrapper}>
                <Film size={20} />
              </div>
              <div className={styles.milestoneContent}>
                <h4 className={styles.milestoneTitle}>Short Film Focus</h4>
                <p className={styles.milestoneDesc}>
                  Celebrating storytelling within 40 minutes, including fiction, documentaries, and animation.
                </p>
              </div>
            </div>

            <div className={styles.milestoneItem}>
              <div className={styles.iconWrapper}>
                <Calendar size={20} />
              </div>
              <div className={styles.milestoneContent}>
                <h4 className={styles.milestoneTitle}>Key Dates</h4>
                <p className={styles.milestoneDesc}>
                  Screenings and workshops begin on **21st July 2026**, leading to the main event on **21st October 2026**.
                </p>
              </div>
            </div>

            <div className={styles.milestoneItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={20} />
              </div>
              <div className={styles.milestoneContent}>
                <h4 className={styles.milestoneTitle}>Official Venue</h4>
                <p className={styles.milestoneDesc}>
                  Hosted at the historic **Rabindra Mandap** auditorium in Bhubaneswar, Odisha.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className={styles.visionMission}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.box}
        >
          <div style={{ color: "var(--gold-primary)" }}>
            <Compass size={32} />
          </div>
          <h3 className={`${styles.boxTitle} heading-cinzel`}>Our Vision</h3>
          <p className={styles.boxText}>
            To establish Odisha as a prominent hub for international independent cinema, fostering cultural exchange and visual innovation that inspires future generations of storytellers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.box}
        >
          <div style={{ color: "var(--gold-primary)" }}>
            <Shield size={32} />
          </div>
          <h3 className={`${styles.boxTitle} heading-cinzel`}>Our Values</h3>
          <p className={styles.boxText}>
            Upholding creative integrity, celebrating diversity of perspectives, and ensuring a supportive, inclusive, and transparent platform for independent artists worldwide.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
