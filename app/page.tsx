"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Film, Award, Users, MapPin, Calendar, Compass, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-21T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Ambient background details */}
      <div className="bg-ambient-glow" style={{ top: "10%", left: "10%" }} />
      <div className="bg-ambient-glow" style={{ bottom: "20%", right: "10%" }} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.badge}
          >
            Odisha Film Society Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${styles.title} heading-cinzel`}
          >
            Odisha&apos;s First <br />
            <span className="text-gold">International</span> <br />
            Short Film Festival
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.tagline}
          >
            A premier celebration of visual storytelling. Bringing together independent filmmakers, cinematic artists, and film enthusiasts from across the globe.
          </motion.p>

          {/* Key Details Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.countdownSection}
          >
            <p className={styles.countdownLabel}>Festival begins in</p>
            <div className={styles.countdownGrid}>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNum}>{timeLeft.days}</span>
                <span className={styles.countdownUnit}>Days</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNum}>{timeLeft.hours}</span>
                <span className={styles.countdownUnit}>Hrs</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNum}>{timeLeft.minutes}</span>
                <span className={styles.countdownUnit}>Mins</span>
              </div>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNum}>{timeLeft.seconds}</span>
                <span className={styles.countdownUnit}>Secs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={styles.ctaGroup}
          >
            <Link href="/submissions" className="btn-gold">
              Submit Your Film <ArrowRight size={16} />
            </Link>
            <Link href="/about" className={styles.btnSecondary}>
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Features Section */}
      <section className={styles.highlights}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Highlights</span>
          <h2 className={`${styles.sectionTitle} heading-cinzel`}>Festival Offerings</h2>
        </div>

        <div className={styles.cardsGrid}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.card}
          >
            <div className={styles.cardIcon}>
              <Film size={24} />
            </div>
            <h3 className={`${styles.cardTitle} heading-cinzel`}>Global Cinema</h3>
            <p className={styles.cardDesc}>
              Screening an exclusive collection of short films representing diverse languages, stories, and cinematic traditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.card}
          >
            <div className={styles.cardIcon}>
              <Award size={24} />
            </div>
            <h3 className={`${styles.cardTitle} heading-cinzel`}>Prestigious Awards</h3>
            <p className={styles.cardDesc}>
              Honoring outstanding talent across multiple categories including Best Film, Best Director, Cinematography, and Screenplay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.card}
          >
            <div className={styles.cardIcon}>
              <Users size={24} />
            </div>
            <h3 className={`${styles.cardTitle} heading-cinzel`}>Workshops & Panels</h3>
            <p className={styles.cardDesc}>
              Engage with industry experts, veteran directors, and writers in masterclasses designed to elevate your cinematic craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue & Dates Section */}
      <section className={styles.venue}>
        <div className={styles.venueContainer}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.venueContent}
          >
            <span className={styles.venueBadge}>The Grand Finale</span>
            <h2 className={`${styles.venueTitle} heading-cinzel`}>
              The Main Event <br />
              At <span className="text-gold">Rabindra Mandap</span>
            </h2>
            <p className={styles.venueDesc}>
              Bhubaneswar&apos;s iconic cultural epicenter, Rabindra Mandap, will host the grand finale and awards ceremony. Experience the red carpet, live screenings, and the celebration of independent cinema under one magnificent roof.
            </p>

            <div className={styles.venueMeta}>
              <div className={styles.venueMetaItem}>
                <Calendar className={styles.venueMetaIcon} size={20} />
                <span className={styles.venueMetaText}>
                  Main Event: 21st October 2026
                </span>
              </div>
              <div className={styles.venueMetaItem}>
                <MapPin className={styles.venueMetaIcon} size={20} />
                <span className={styles.venueMetaText}>
                  Rabindra Mandap, Bhubaneswar, Odisha
                </span>
              </div>
              <div className={styles.venueMetaItem}>
                <Compass className={styles.venueMetaIcon} size={20} />
                <span className={styles.venueMetaText}>
                  Events & Screenings start 21st July 2026
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.venueVisual}
          >
            <div className={styles.venueVisualText}>
              <h3 className={styles.venueVisualName}>Rabindra Mandap</h3>
              <p className={styles.venueVisualLoc}>Bhubaneswar, Odisha</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
