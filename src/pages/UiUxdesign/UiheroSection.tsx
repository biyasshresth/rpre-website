import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { GrainOverlay } from "./GrainOverlay";
import { Journey } from "./UiJourney";
import { Challenges } from "./UiChallanges";
import { Conclusion } from "./Conclusion";

export function UiheroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollCueVisible, setScrollCueVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Show scroll cue after mount
    setScrollCueVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollCueVisible(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  return (
    <>
      <section id="intro" className={styles.section}>
        <div className={styles.blobTopRight} aria-hidden="true" />
        <div className={styles.blobBottomLeft} aria-hidden="true" />
        <div className={styles.goldEdge} aria-hidden="true" />

        <div className={styles.content}>
          {/* Headline */}
          <h1
            className={[
              styles.headline,
              styles.mountBase,
              mounted ? styles.mountVisible : "",
              styles.delay03,
            ].join(" ")}
          >
            Crafting&nbsp;
            <em className={styles.headlineAccent}>Stories</em>
            <br />
            Through Design
          </h1>

          {/* Sub-copy */}
          <p
            className={[
              styles.subCopy,
              styles.mountBase,
              mounted ? styles.mountVisible : "",
              styles.delay05,
            ].join(" ")}
          >
            A journey through creative vision, human challenges, and the quiet
            persistence it takes to build something worth remembering.
          </p>

          {/* CTAs */}
          <div
            className={[
              styles.ctaRow,
              styles.mountBase,
              mounted ? styles.mountVisible : "",
              styles.delay07,
            ].join(" ")}
          >
            <a href="#journey" className={styles.ctaPrimary}>
              Explore Journey
            </a>
            <a href="#conclusion" className={styles.ctaSecondary}>
              Read Conclusion
            </a>
          </div>

          {/* Scroll cue */}
          <div
            className={[
              styles.scrollCue,
              scrollCueVisible ? styles.scrollCueVisible : "",
            ].join(" ")}
          >
            <span className={styles.scrollLabel}>Scroll</span>
            <div className={styles.scrollLine} aria-hidden="true" />
          </div>
        </div>
      </section>
      <GrainOverlay />
      <Journey />
      <Challenges />
      <Conclusion />
    </>
  );
}
