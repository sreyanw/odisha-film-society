"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "OISFF 2026", href: "/festival" },
  { name: "Programs", href: "/programs" },
  { name: "Film Categories", href: "/categories" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.topOrnament} aria-hidden="true" />
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Odisha Film Society — Home">
          <Image
            src="/images/logo-ofs.webp"
            alt="OFS — Odisha Film Society"
            width={77}
            height={48}
            priority
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            <span className={`${styles.logoTitle} heading-cinzel`}>Odisha Film Society</span>
            <span className={styles.logoSub}>Intl. Short Film Festival</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className={styles.actions}>
          <Link href="/submissions" className="btn-gold">
            Submit Film
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={styles.mobileNav}
          >
            <nav className={styles.mobileNavContainer} aria-label="Mobile">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${styles.mobileNavLink} ${
                        isActive ? styles.mobileActiveLink : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className={styles.mobileButtonWrapper}
              >
                <Link
                  href="/submissions"
                  onClick={() => setIsOpen(false)}
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Submit Film
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
