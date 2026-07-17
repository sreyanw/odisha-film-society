"use client";

import { motion } from "framer-motion";
import { Film, MapPin, Calendar, Compass, Shield, Landmark } from "lucide-react";
import { OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
import styles from "./about.module.css";

const glance = [
  {
    icon: Film,
    title: "Short Film Focus",
    desc: "Celebrating storytelling within 40 minutes — fiction, documentary, and animation.",
  },
  {
    icon: Calendar,
    title: "Key Dates",
    desc: "Screenings and workshops begin 21 July 2026, leading to the main event on 21 October 2026.",
  },
  {
    icon: MapPin,
    title: "Official Venue",
    desc: "Hosted at the historic Rabindra Mandap auditorium in Bhubaneswar, Odisha.",
  },
];

export default function About() {
  return (
    <div className={styles.container}>
      <div className="bg-ambient-glow" style={{ top: "-5%", left: "30%" }} />

      {/* Header */}
      <header className={styles.header}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          About the Society
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <OrnateDivider className={styles.divider} />
        </motion.div>
      </header>

      {/* Story + Glance */}
      <div className={styles.contentGrid}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${styles.story} panel-parchment`}
        >
          <CornerFrame />
          <h2 className={`${styles.subtitle} heading-cinzel`}>
            Odisha Film Society
          </h2>
          <p className={styles.paragraph}>
            Established with a vision to nurture and celebrate the art of
            visual storytelling, the Odisha Film Society has been at the
            forefront of promoting cinematic expression in the region. We
            believe cinema is a universal language that transcends boundaries,
            cultures, and differences.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;Our mission is to cultivate a vibrant community of
            filmmakers, visual artists, and cinema lovers — giving them
            platforms to collaborate, learn, and showcase their craft.&rdquo;
          </blockquote>
          <p className={styles.paragraph}>
            This year, we proudly present Odisha&apos;s First International
            Short Film Festival. By bridging local talent and global
            filmmakers, the festival inspires creative dialogue and showcases
            the power of short-format cinema to express deep human narratives.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`${styles.infoPanel} panel-ornate`}
        >
          <h3 className={`${styles.panelTitle} heading-cinzel`}>
            Festival at a Glance
          </h3>
          <div className={styles.milestones}>
            {glance.map((item) => (
              <div key={item.title} className={styles.milestoneItem}>
                <div className={styles.iconWrapper}>
                  <item.icon size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <h4 className={`${styles.milestoneTitle} heading-cinzel`}>
                    {item.title}
                  </h4>
                  <p className={styles.milestoneDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* Vision / Values / Heritage */}
      <div className={styles.visionMission}>
        {[
          {
            icon: Compass,
            title: "Our Vision",
            text: "To establish Odisha as a prominent hub for international independent cinema, fostering cultural exchange and visual innovation that inspires future generations of storytellers.",
          },
          {
            icon: Shield,
            title: "Our Values",
            text: "Upholding creative integrity, celebrating diversity of perspectives, and ensuring a supportive, inclusive, and transparent platform for independent artists worldwide.",
          },
          {
            icon: Landmark,
            title: "Our Heritage",
            text: "Rooted in the land of Konark and Odissi, we carry a millennia-old tradition of art and storytelling into the language of contemporary cinema.",
          },
        ].map((box, index) => (
          <motion.div
            key={box.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className={`${styles.box} panel-ornate`}
          >
            <box.icon size={32} className={styles.boxIcon} strokeWidth={1.4} />
            <h3 className={`${styles.boxTitle} heading-cinzel`}>{box.title}</h3>
            <p className={styles.boxText}>{box.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
