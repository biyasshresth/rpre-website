import { FadeIn } from "./FadeIn";
import styles from "./Journey.module.css";

interface Milestone {
  year: string;
  title: string;
  body: string;
  icon: string;
}

const milestones: Milestone[] = [
  {
    year: "2018",
    title: "The Spark",
    body: "It began with a single blank canvas and the audacity to believe something beautiful could emerge from nothing. Those first experiments were raw, uncertain — but they were honest.",
    icon: "✦",
  },
  {
    year: "2020",
    title: "Finding Voice",
    body: "Two years in, patterns started crystallizing. A distinct perspective took shape — one rooted in restraint, organic texture, and the power of meaningful negative space.",
    icon: "◈",
  },
  {
    year: "2022",
    title: "Going Deep",
    body: "Collaboration opened new doors. Working alongside architects, writers, and musicians revealed that design lives at the intersection of disciplines, not within them.",
    icon: "◎",
  },
  {
    year: "2024",
    title: "The Practice",
    body: "Today the work continues — slower, more intentional. Every project is a meditation. The goal isn't perfection. It's presence.",
    icon: "◇",
  },
];

export function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.topRule} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Heading */}
        <FadeIn direction="up">
          <div className={styles.headingWrap}>
            <span className={styles.chapterLabel}>Chapter II</span>
            <h2 className={styles.heading}>
              The <em className={styles.headingAccent}>Journey</em>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.spine} aria-hidden="true" />

          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn
                key={i}
                delay={i * 0.12}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={[
                    styles.row,
                    isEven ? styles.rowEven : styles.rowOdd,
                  ].join(" ")}
                >
                  {/* Card */}
                  <div
                    className={[
                      styles.cardWrap,
                      isEven ? styles.cardWrapEven : styles.cardWrapOdd,
                    ].join(" ")}
                  >
                    <div className={styles.card}>
                      <span className={styles.cardYear}>{m.year}</span>
                      <h3 className={styles.cardTitle}>{m.title}</h3>
                      <p className={styles.cardBody}>{m.body}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className={styles.node} aria-hidden="true">
                    {m.icon}
                  </div>

                  {/* Spacer */}
                  <div className={styles.spacer} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
