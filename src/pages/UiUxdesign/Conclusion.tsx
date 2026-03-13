import { FadeIn } from "./FadeIn";
import styles from "./Conclusion.module.css";
import FooterPage from "../footer/FooterPage";

const tags = ["Design", "Motion", "Identity", "Editorial"] as const;

export function Conclusion() {
  return (
    <>
    <section id="conclusion" className={styles.section}>
      <div className={styles.ringOuter}       aria-hidden="true" />
      <div className={styles.ringInner}       aria-hidden="true" />
      <div className={styles.glowBottomLeft}  aria-hidden="true" />
      <div className={styles.topRule}         aria-hidden="true" />

      <div className={styles.content}>
        {/* Chapter label + heading */}
        <FadeIn direction="up">
          <span className={styles.chapterLabel}>Chapter IV · Finale</span>
          <h2 className={styles.heading}>
            The Work
            <br />
            <em className={styles.headingAccent}>Continues</em>
          </h2>
        </FadeIn>

        {/* Body copy */}
        <FadeIn delay={0.2} direction="up">
          <p className={styles.bodyCopy}>
            There is no arrival. The horizon doesn't stop retreating. And yet — that's
            the gift. The creative life asks us not to finish, but to remain faithful to
            the practice regardless of outcome.
          </p>
          <p className={[styles.bodyCopy, styles.bodyCopyLast].join(" ")}>
            Every line drawn, every idea tested, every failure absorbed — they accumulate
            into something no single work could hold. They become{" "}
            <em className={styles.bodyAccent}>character</em>.
          </p>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.4} direction="up">
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>
              "Make the thing. Then make it again.
              <br />
              The rest is noise."
            </p>
            <span className={styles.quoteAttrib}>— A designer's personal creed</span>
          </div>
        </FadeIn>

        {/* Tags */}
        <FadeIn delay={0.6} direction="up">
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
    <FooterPage />
    </>
  );
}