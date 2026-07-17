"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Film,
  Trophy,
  Clapperboard,
  Video,
  GraduationCap,
  Camera,
  PenTool,
  Users,
  Music,
  Scissors,
  Globe,
  Heart,
  Bell,
} from "lucide-react";
import { OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
import styles from "./categories.module.css";

const categories = [
  { icon: Trophy, name: "Best Short Film", desc: "The festival's highest honour for a complete work of short cinema." },
  { icon: Clapperboard, name: "Best Director", desc: "For singular vision and command of the craft." },
  { icon: Video, name: "Best Documentary Short", desc: "Non-fiction storytelling that illuminates the real." },
  { icon: GraduationCap, name: "Best Student Film", desc: "Celebrating the boldest voices still in film school." },
  { icon: Camera, name: "Best Cinematography", desc: "For images that stay with the audience long after." },
  { icon: PenTool, name: "Best Screenplay", desc: "Writing that gives a short film its soul." },
  { icon: Users, name: "Best Ensemble Cast", desc: "Performances that breathe together as one." },
  { icon: Film, name: "Best Animation Short", desc: "Imagination unbound by the camera." },
  { icon: Music, name: "Best Original Score", desc: "Music that becomes the film's heartbeat." },
  { icon: Scissors, name: "Best Editing", desc: "Rhythm, pace, and the invisible art of the cut." },
  { icon: Globe, name: "Best International Film", desc: "An outstanding entry from beyond India's borders." },
  { icon: Heart, name: "Audience Choice", desc: "The film the festival's audiences take home in their hearts." },
];

export default function Categories() {
  return (
    <div className={styles.container}>
      <div className="bg-ambient-glow" style={{ top: "-5%", left: "25%" }} />

      {/* Header */}
      <header className={styles.header}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          For Every Storyteller
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          Film Categories
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
          20+ award categories spanning fiction, documentary, and animation —
          here is a first look at the honours of OISFF 2026.
        </motion.p>
      </header>

      {/* Categories grid */}
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.06, duration: 0.5 }}
            className={styles.card}
          >
            <cat.icon size={26} className={styles.cardIcon} strokeWidth={1.5} />
            <h2 className={`${styles.cardName} heading-cinzel`}>{cat.name}</h2>
            <p className={styles.cardDesc}>{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Full list note */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${styles.note} panel-ornate`}
      >
        <CornerFrame />
        <h2 className={`${styles.noteTitle} heading-cinzel`}>
          The complete list arrives with the <span className="text-gold">nomination forms</span>
        </h2>
        <p className={styles.noteText}>
          Eligibility rules, entry formats, and the full slate of categories
          will be published when the call for entries opens.
        </p>
        <Link href="/submissions" className="btn-gold">
          <Bell size={16} /> Get Notified
        </Link>
      </motion.div>
    </div>
  );
}
