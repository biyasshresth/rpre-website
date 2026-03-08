import { FadeIn } from "./FadeIn";
import styles from "./UiChallange.module.css";

interface Challenge {
  label: string;
  desc: string;
  accentClass: string;
}

const challenges: Challenge[] = [
  {
    label: "Perfectionism",
    desc: "The relentless inner critic that dismantled countless pieces before they could breathe. Learning to release imperfect work was the first act of courage.",
    accentClass: "gold",
  },
  {
    label: "Isolation",
    desc: "Creative work can be profoundly lonely. Building a community of practice — people who understand the silence between brushstrokes — took years and vulnerability.",
    accentClass: "olive",
  },
  {
    label: "Comparison",
    desc: "The internet flattens time. A beginner sees a master's peak work and measures it against their earliest attempts. The cure was radical commitment to one's own timeline.",
    accentClass: "goldDark",
  },
  {
    label: "Doubt",
    desc: "Not the obvious kind — the quiet voice that arrives at 2am asking whether any of this matters. It still shows up. The difference now is knowing it lies.",
    accentClass: "oliveDk",
  },
  {
    label: "Sustainability",
    desc: "Creating consistently without burning out demanded redesigning how creativity itself was defined — from output to practice, from product to presence.",
    accentClass: "gold",
  },
];

export function Challenges() {
  return (
    <section id="challenges" className={styles.section}>
      <div className={styles.topRule} aria-hidden="true" />

      <div className={styles.inner}>
        <FadeIn direction="up">
          <div className={styles.headingBlock}>
            <span className={styles.chapterLabel}>Chapter III</span>
            <h2 className={styles.heading}>
              The <em className={styles.headingAccent}>Challenges</em>
            </h2>
            <p className={styles.intro}>
              Every meaningful path carries its weight. These are the honest
              obstacles — not dramatized, not minimized.
            </p>
          </div>
        </FadeIn>

        <div className={styles.list}>
          {challenges.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="left">
              <div
                className={[
                  styles.challengeRow,
                  styles[c.accentClass as keyof typeof styles],
                ].join(" ")}
              >
                <div className={styles.accentBar} aria-hidden="true" />
                <div className={styles.rowBody}>
                  <div className={styles.rowMeta}>
                    <span className={styles.rowIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.rowTitle}>{c.label}</h3>
                  </div>
                  <p className={styles.rowDesc}>{c.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
