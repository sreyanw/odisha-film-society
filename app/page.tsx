"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Film,
  Award,
  Users,
  MapPin,
  Calendar,
  Trophy,
  ArrowRight,
  Clapperboard,
  Lightbulb,
  Globe,
  Landmark,
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Chakra, OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
import styles from "./page.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pillars = [
  {
    icon: Clapperboard,
    title: "International Film Festival",
    desc: "Worldwide participation",
  },
  {
    icon: Users,
    title: "Filmmaker Community",
    desc: "Connect. Collaborate. Create.",
  },
  {
    icon: Lightbulb,
    title: "Feature Film Incubator",
    desc: "From idea to big screen",
  },
  {
    icon: Film,
    title: "Multiple Categories",
    desc: "For every storyteller",
  },
];

const missions = [
  {
    icon: Sparkles,
    title: "Discover & Nurture",
    desc: "Emerging filmmakers and untold stories.",
  },
  {
    icon: Landmark,
    title: "Promote Culture",
    desc: "Showcase Odisha's heritage and art through cinema.",
  },
  {
    icon: HeartHandshake,
    title: "Build Communities",
    desc: "Create strong film communities across Odisha.",
  },
  {
    icon: ArrowRight,
    title: "Create Pathways",
    desc: "Support filmmakers from short films to feature films.",
  },
];

const stats = [
  { value: "50+", label: "Countries" },
  { value: "1000+", label: "Filmmakers" },
  { value: "20+", label: "Categories" },
  { value: "1", label: "Big Celebration" },
];

const programs = [
  {
    icon: Film,
    img: "/images/program-cinema.webp",
    title: "Community Cinema",
    desc: "Open-air and auditorium screenings that bring world cinema to every corner of Odisha.",
  },
  {
    icon: GraduationCap,
    img: "/images/program-workshops.webp",
    title: "Workshops & Labs",
    desc: "Masterclasses with veteran directors, writers, and technicians to sharpen your craft.",
  },
  {
    icon: Users,
    img: "/images/program-networking.webp",
    title: "Filmmaker Networking",
    desc: "Curated meets where storytellers, producers, and artists find their next collaborators.",
  },
  {
    icon: Lightbulb,
    img: "/images/program-incubator.webp",
    title: "Feature Film Incubator",
    desc: "A guided pathway that develops standout short filmmakers into feature film directors.",
  },
  {
    icon: Landmark,
    img: "/images/program-culture.webp",
    title: "Cultural Preservation",
    desc: "Documenting Odisha's dance, craft, and living traditions through the lens of cinema.",
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Festival events begin 21 July 2026, midnight IST
    const targetDate = new Date("2026-07-21T00:00:00+05:30").getTime();

    const tick = () => {
      const difference = targetDate - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
      return true;
    };

    tick();
    const interval = setInterval(() => {
      if (!tick()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* ══ Hero ══════════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Painted temple scene backdrop */}
        <div className={styles.heroArt} aria-hidden="true">
          <Image
            src="/images/hero-scene.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroArtImg}
          />
          <div className={styles.heroArtOverlay} />
        </div>

        <div className={styles.heroContainer}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              From Short Films to Big Screens
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${styles.title} heading-cinzel`}
            >
              Odisha <span className="text-gold">International</span>
              <br />
              Short Film Festival
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={styles.tagline}
            >
              Odisha&apos;s first international short film festival — a global
              platform to discover, celebrate, and nurture emerging filmmakers
              while building pathways from short films to feature films.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.ctaGroup}
            >
              <Link href="/submissions" className="btn-gold">
                Submit Your Film <ArrowRight size={16} />
              </Link>
              <Link href="/festival" className="btn-outline">
                Explore Festival
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className={styles.heroMeta}
            >
              <div className={styles.heroMetaItem}>
                <Calendar size={20} className={styles.heroMetaIcon} />
                <div>
                  <span className={styles.heroMetaTitle}>21 October 2026</span>
                  <span className={styles.heroMetaSub}>Festival Date</span>
                </div>
              </div>
              <div className={styles.heroMetaDivider} aria-hidden="true" />
              <div className={styles.heroMetaItem}>
                <MapPin size={20} className={styles.heroMetaIcon} />
                <div>
                  <span className={styles.heroMetaTitle}>Rabindra Mandap</span>
                  <span className={styles.heroMetaSub}>Bhubaneswar</span>
                </div>
              </div>
              <div className={styles.heroMetaDivider} aria-hidden="true" />
              <div className={styles.heroMetaItem}>
                <Trophy size={20} className={styles.heroMetaIcon} />
                <div>
                  <span className={styles.heroMetaTitle}>Great Stories</span>
                  <span className={styles.heroMetaSub}>Begin Here</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dancer monument visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.heroVisual}
          >
            <div className={styles.chakraGlow} aria-hidden="true" />
            <Chakra size={470} spinning className={styles.chakraHalo} />
            <Image
              src="/images/dancer-trophy.webp"
              alt="Odissi dancer holding the Konark chakra aloft — the OISFF festival emblem"
              width={410}
              height={1100}
              priority
              className={styles.dancer}
            />
            <div className={styles.plinth}>
              <span className={`${styles.plinthText} heading-cinzel`}>OISFF</span>
            </div>
          </motion.div>
        </div>

        {/* Countdown strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className={styles.countdownStrip}
        >
          <p className={styles.countdownLabel}>Events begin 21 July 2026 — in</p>
          <div className={styles.countdownGrid}>
            {[
              { num: timeLeft.days, unit: "Days" },
              { num: timeLeft.hours, unit: "Hours" },
              { num: timeLeft.minutes, unit: "Minutes" },
              { num: timeLeft.seconds, unit: "Seconds" },
            ].map((item) => (
              <div key={item.unit} className={styles.countdownBox}>
                <span className={styles.countdownNum}>
                  {String(item.num).padStart(2, "0")}
                </span>
                <span className={styles.countdownUnit}>{item.unit}</span>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      {/* ══ Pillars strip ═════════════════════════════════════ */}
      <section className={styles.pillarsSection} aria-label="Festival pillars">
        <motion.div {...fadeUp} className={`${styles.pillarsPanel} panel-ornate`}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.pillar}>
              <pillar.icon size={30} className={styles.pillarIcon} strokeWidth={1.5} />
              <h3 className={`${styles.pillarTitle} heading-cinzel`}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══ About + Mission ═══════════════════════════════════ */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${styles.aboutCard} panel-parchment`}
          >
            <CornerFrame />
            <p className={styles.aboutEyebrow}>About OISFF</p>
            <h2 className={`${styles.aboutTitle} heading-cinzel`}>
              Not just a festival. <br /> A movement.
            </h2>
            <p className={styles.aboutText}>
              We celebrate storytelling, empower filmmakers, preserve culture,
              and create opportunities for the next generation of cinema —
              bridging Odisha&apos;s artistic legacy with the world&apos;s
              boldest new voices.
            </p>
            <Link href="/about" className={styles.aboutLink}>
              Learn More <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={styles.missionWrap}
          >
            <div className={styles.sectionHeading}>
              <OrnateDivider className={styles.dividerGold} />
              <h2 className={`${styles.sectionTitle} heading-cinzel`}>Our Mission</h2>
            </div>
            <div className={styles.missionGrid}>
              {missions.map((mission) => (
                <div key={mission.title} className={styles.missionTile}>
                  <mission.icon size={26} className={styles.missionIcon} strokeWidth={1.5} />
                  <h3 className={`${styles.missionTitle} heading-cinzel`}>
                    {mission.title}
                  </h3>
                  <p className={styles.missionDesc}>{mission.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div {...fadeUp} className={`${styles.statsBar} panel-ornate`}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={`${styles.statValue} heading-cinzel`}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══ What We Do ════════════════════════════════════════ */}
      <section className={styles.programsSection}>
        <motion.div {...fadeUp} className={styles.sectionHeading}>
          <OrnateDivider className={styles.dividerGold} />
          <h2 className={`${styles.sectionTitle} heading-cinzel`}>What We Do</h2>
        </motion.div>

        <div className={styles.programsGrid}>
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={styles.programCard}
            >
              <div className={styles.programArt}>
                <Image
                  src={program.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className={styles.programImg}
                />
                <div className={styles.programArtFade} aria-hidden="true" />
                <div className={styles.programIconBadge}>
                  <program.icon size={20} strokeWidth={1.6} />
                </div>
              </div>
              <h3 className={`${styles.programTitle} heading-cinzel`}>
                {program.title}
              </h3>
              <p className={styles.programDesc}>{program.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className={styles.programsCta}>
          <Link href="/programs" className="btn-outline">
            Explore All Programs <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ══ Venue ═════════════════════════════════════════════ */}
      <section className={styles.venueSection}>
        <div className={styles.venueGrid}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className={styles.venueContent}
          >
            <p className="eyebrow">The Grand Finale</p>
            <h2 className={`${styles.venueTitle} heading-cinzel`}>
              Main Event at <br />
              <span className="text-gold">Rabindra Mandap</span>
            </h2>
            <p className={styles.venueDesc}>
              Bhubaneswar&apos;s iconic cultural epicenter hosts the grand
              finale and awards night. Experience the red carpet, curated
              screenings, and the celebration of independent cinema beneath
              one historic roof.
            </p>
            <ul className={styles.venueMeta}>
              <li className={styles.venueMetaItem}>
                <Calendar size={19} className={styles.venueMetaIcon} />
                Events &amp; screenings begin 21 July 2026
              </li>
              <li className={styles.venueMetaItem}>
                <Award size={19} className={styles.venueMetaIcon} />
                Main event &amp; awards — 21 October 2026
              </li>
              <li className={styles.venueMetaItem}>
                <MapPin size={19} className={styles.venueMetaIcon} />
                Rabindra Mandap, Bhubaneswar, Odisha
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className={`${styles.venueVisual} panel-ornate`}
          >
            <div className={styles.venueArt} aria-hidden="true">
              <Image
                src="/images/hero-scene.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={styles.venueArtImg}
              />
              <div className={styles.venueArtOverlay} />
            </div>
            <Globe size={30} className={styles.venueVisualIcon} strokeWidth={1.3} />
            <h3 className={`${styles.venueVisualName} heading-cinzel`}>
              Rabindra Mandap
            </h3>
            <p className={styles.venueVisualLoc}>Bhubaneswar · Odisha · India</p>
            <OrnateDivider className={styles.dividerGold} />
            <p className={styles.venueVisualNote}>
              50+ countries · 1000+ filmmakers · one stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ Closing CTA ═══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <motion.div {...fadeUp} className={`${styles.ctaPanel} panel-ornate`}>
          <CornerFrame />
          <p className="eyebrow">Submissions for Awards</p>
          <h2 className={`${styles.ctaTitle} heading-cinzel`}>
            Nomination Forms <span className="text-gold">Launching Soon</span>
          </h2>
          <p className={styles.ctaText}>
            Be the first to know when the call for entries opens. Your story
            deserves the big screen.
          </p>
          <Link href="/submissions" className="btn-gold">
            Get Notified <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
