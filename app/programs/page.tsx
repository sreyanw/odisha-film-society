"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Film,
  GraduationCap,
  Users,
  Lightbulb,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { OrnateDivider } from "@/components/Decor/Decor";
import styles from "./programs.module.css";

const programs = [
  {
    icon: Film,
    img: "/images/program-cinema.webp",
    title: "Community Cinema",
    desc: "Open-air and auditorium screenings that bring world cinema to every corner of Odisha — from city courtyards to small-town squares. Great films belong to everyone, and we carry them to where people gather.",
  },
  {
    icon: GraduationCap,
    img: "/images/program-workshops.webp",
    title: "Workshops & Labs",
    desc: "Masterclasses with veteran directors, writers, and technicians covering story, cinematography, and editing. Hands-on labs where emerging filmmakers sharpen their craft frame by frame.",
  },
  {
    icon: Users,
    img: "/images/program-networking.webp",
    title: "Filmmaker Networking",
    desc: "Curated meets where storytellers, producers, and artists find their next collaborators. Stories connect us — and the right room can change the course of a filmmaker's career.",
  },
  {
    icon: Lightbulb,
    img: "/images/program-incubator.webp",
    title: "Feature Film Incubator",
    desc: "A guided pathway that develops standout short filmmakers into feature film directors — from story and treatment to lookbook, schedule, and pitch deck. From idea to big screen.",
  },
  {
    icon: Landmark,
    img: "/images/program-culture.webp",
    title: "Cultural Preservation",
    desc: "Documenting Odisha's dance, craft, and living traditions through the lens of cinema — so the artistry of Odissi, Pattachitra, and the state's master artisans travels forward with every frame.",
  },
];

export default function Programs() {
  return (
    <div className={styles.container}>
      <div className="bg-ambient-glow" style={{ top: "-5%", right: "25%" }} />

      {/* Header */}
      <header className={styles.header}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          What We Do
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.title} heading-cinzel`}
        >
          Our Programs
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
          Five pillars that carry OISFF beyond a single festival week — a
          year-round movement for cinema in Odisha.
        </motion.p>
      </header>

      {/* Alternating feature rows */}
      <div className={styles.rows}>
        {programs.map((program, index) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ""}`}
          >
            <div className={styles.rowArt}>
              <Image
                src={program.img}
                alt={program.title}
                fill
                sizes="(min-width: 900px) 45vw, 92vw"
                className={styles.rowImg}
              />
              <div className={styles.rowArtFade} aria-hidden="true" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowIcon}>
                <program.icon size={24} strokeWidth={1.5} />
              </div>
              <h2 className={`${styles.rowTitle} heading-cinzel`}>
                {program.title}
              </h2>
              <p className={styles.rowDesc}>{program.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.cta}
      >
        <p className={styles.ctaText}>
          Want to be part of the movement — as a filmmaker, mentor, or partner?
        </p>
        <div className={styles.ctaActions}>
          <Link href="/submissions" className="btn-gold">
            Submit Your Film <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline">
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
