"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  Film,
  Clapperboard,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
import styles from "./festival.module.css";

const timeline = [
  {
    icon: Sparkles,
    date: "21 July 2026",
    title: "Festival Events Begin",
    desc: "Community screenings, workshops, and filmmaker meets open across Odisha, building toward the grand finale.",
  },
  {
    icon: Clapperboard,
    date: "To Be Announced",
    title: "Nominations & Screenings",
    desc: "Nomination forms launch soon. Selected films travel through curated screenings and jury rounds.",
  },
  {
    icon: Award,
    date: "21 October 2026",
    title: "The Grand Finale",
    desc: "The main event and awards night at Rabindra Mandap, Bhubaneswar — red carpet, premieres, and honours.",
  },
];

const facts = [
  { icon: Calendar, label: "Main Event", value: "21 October 2026" },
  { icon: MapPin, label: "Venue", value: "Rabindra Mandap, Bhubaneswar" },
  { icon: Film, label: "Format", value: "Short films up to 40 minutes" },
  { icon: Award, label: "Awards", value: "20+ categories" },
];

export default function Festival() {
  return (
    <div className={styles.container}>
      <div className="bg-ambient-glow" style={{ top: "-5%", left: "35%" }} />

      {/* Header */}
      <header className={styles.header}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          The Festival
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          OISFF <span className="text-gold">2026</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <OrnateDivider className={styles.divider} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.lede}
        >
          Odisha&apos;s first international short film festival — a season of
          cinema that begins in July and crowns its stories in October.
        </motion.p>
      </header>

      {/* Quick facts */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${styles.factsBar} panel-ornate`}
      >
        {facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <fact.icon size={22} className={styles.factIcon} strokeWidth={1.5} />
            <span className={styles.factLabel}>{fact.label}</span>
            <span className={styles.factValue}>{fact.value}</span>
          </div>
        ))}
      </motion.div>

      {/* Journey timeline */}
      <section className={styles.timelineSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeading}
        >
          <OrnateDivider className={styles.divider} />
          <h2 className={`${styles.sectionTitle} heading-cinzel`}>
            The Festival Journey
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {timeline.map((stop, index) => (
            <motion.div
              key={stop.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineNode} aria-hidden="true">
                <stop.icon size={22} strokeWidth={1.6} />
              </div>
              <div className={`${styles.timelineCard} panel-ornate`}>
                <span className={styles.timelineDate}>{stop.date}</span>
                <h3 className={`${styles.timelineTitle} heading-cinzel`}>
                  {stop.title}
                </h3>
                <p className={styles.timelineDesc}>{stop.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venue */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`${styles.venuePanel} panel-ornate`}
      >
        <CornerFrame />
        <div className={styles.venueArt} aria-hidden="true">
          <Image
            src="/images/hero-scene.webp"
            alt=""
            fill
            sizes="(min-width: 900px) 60vw, 100vw"
            className={styles.venueArtImg}
          />
          <div className={styles.venueArtOverlay} />
        </div>
        <p className="eyebrow">The Stage</p>
        <h2 className={`${styles.venueTitle} heading-cinzel`}>
          Rabindra Mandap, <span className="text-gold">Bhubaneswar</span>
        </h2>
        <p className={styles.venueDesc}>
          The city&apos;s iconic cultural auditorium hosts the awards night —
          where 50+ countries and 1000+ filmmakers meet on one stage.
        </p>
        <Link href="/submissions" className="btn-gold">
          Submit Your Film <ArrowRight size={16} />
        </Link>
      </motion.section>
    </div>
  );
}
