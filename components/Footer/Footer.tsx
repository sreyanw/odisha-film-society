import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Calendar } from "lucide-react";
import { OrnateDivider } from "@/components/Decor/Decor";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={styles.container}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Odisha Film Society — Home">
            <Image
              src="/images/badge-ofs.webp"
              alt="Odisha Film Society official emblem"
              width={140}
              height={132}
              className={styles.badgeImg}
            />
          </Link>
          <p className={styles.description}>
            A global platform to discover, celebrate, and nurture emerging
            filmmakers — from short films to big screens.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3v6z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigate column */}
        <nav className={styles.column} aria-label="Footer">
          <h3 className={`${styles.columnTitle} heading-cinzel`}>Navigate</h3>
          <div className={styles.navColumns}>
            <div className={styles.navGroup}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/about" className={styles.navLink}>About Us</Link>
              <Link href="/festival" className={styles.navLink}>OISFF 2026</Link>
              <Link href="/programs" className={styles.navLink}>Programs</Link>
            </div>
            <div className={styles.navGroup}>
              <Link href="/categories" className={styles.navLink}>Film Categories</Link>
              <Link href="/submissions" className={styles.navLink}>Submissions</Link>
              <Link href="/news" className={styles.navLink}>News</Link>
              <Link href="/gallery" className={styles.navLink}>Gallery</Link>
              <Link href="/contact" className={styles.navLink}>Contact Us</Link>
            </div>
          </div>
        </nav>

        {/* Festival column */}
        <div className={styles.column}>
          <h3 className={`${styles.columnTitle} heading-cinzel`}>The Festival</h3>
          <p className={styles.infoItem}>
            <Calendar size={15} className={styles.icon} />
            <span>
              <strong>21 July 2026</strong> — Events begin
            </span>
          </p>
          <p className={styles.infoItem}>
            <Calendar size={15} className={styles.icon} />
            <span>
              <strong>21 October 2026</strong> — Main event
            </span>
          </p>
          <p className={styles.infoItem}>
            <MapPin size={15} className={styles.icon} />
            <span>Rabindra Mandap, Bhubaneswar</span>
          </p>
          <p className={styles.infoItem}>
            <Mail size={15} className={styles.icon} />
            <a href="mailto:hello@odishafilmsociety.in" className={styles.mailLink}>
              hello@odishafilmsociety.in
            </a>
          </p>
        </div>
      </div>

      <div className={styles.dividerWrap} aria-hidden="true">
        <OrnateDivider className={styles.divider} />
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Odisha Film Society. All rights reserved.
        </p>
        <p className={styles.tagline}>
          Odisha&apos;s First International Short Film Festival
        </p>
      </div>
    </footer>
  );
}
