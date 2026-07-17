import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Chakra, OrnateDivider, CornerFrame } from "@/components/Decor/Decor";
import styles from "./ComingSoon.module.css";

export default function ComingSoon({
  eyebrow,
  title,
  message,
}: {
  eyebrow: string;
  title: string;
  message: string;
}) {
  return (
    <div className={styles.container}>
      <div className="bg-ambient-glow" style={{ top: "5%", left: "30%" }} />

      <section className={`${styles.panel} panel-ornate`}>
        <CornerFrame />
        <div className={styles.chakraWrap} aria-hidden="true">
          <Chakra size={180} spinning className={styles.chakra} />
        </div>

        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`${styles.title} heading-cinzel`}>
          {title} — <span className="text-gold">Coming Soon</span>
        </h1>
        <OrnateDivider className={styles.divider} />
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <Link href="/submissions" className="btn-gold">
            Get Notified <ArrowRight size={16} />
          </Link>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
