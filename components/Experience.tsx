const SectionLabel = ({ text }: { text: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
    <span
      style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        color: "#c87358",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
    <div style={{ flex: 1, height: 1, background: "#ece0d4" }} />
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "var(--font-dm-mono), monospace",
      fontSize: 10,
      padding: "4px 11px",
      background: "#f5ede3",
      border: "1px solid #ddd0c0",
      borderRadius: 100,
      color: "#6b5e52",
      letterSpacing: "0.04em",
    }}
  >
    {children}
  </span>
);

interface Bullet {
  num: string;
  content: React.ReactNode;
}

interface JobProps {
  period: string;
  company: string;
  role: string;
  tags: string[];
  bullets: Bullet[];
  borderBottom?: boolean;
}

function Job({ period, company, role, tags, bullets, borderBottom }: JobProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: 64,
        paddingBottom: borderBottom ? 72 : 0,
        borderBottom: borderBottom ? "1px solid #ece0d4" : "none",
        marginBottom: borderBottom ? 72 : 0,
      }}
    >
      <div>
        {period && (
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#9c8c80",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            {period}
          </div>
        )}
        <h3
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 34,
            color: "#1c1a17",
            marginBottom: 8,
            letterSpacing: "-0.015em",
          }}
        >
          {company}
        </h3>
        <div
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 14,
            color: "#7a6d63",
            fontWeight: 500,
            marginBottom: 22,
          }}
        >
          {role}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          paddingTop: 4,
        }}
      >
        {bullets.map((b) => (
          <div
            key={b.num}
            style={{
              display: "grid",
              gridTemplateColumns: "28px 1fr",
              gap: 14,
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: "#c87358",
                paddingTop: 2,
                letterSpacing: "0.04em",
              }}
            >
              {b.num}
            </span>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: 15.5,
                lineHeight: 1.68,
                color: "#4a4038",
              }}
            >
              {b.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const B = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ fontWeight: 600, color: "#1c1a17" }}>{children}</strong>
);

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 48px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <SectionLabel text="01 — Experience" />
      <h2
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(40px, 4vw, 58px)",
          lineHeight: 1.08,
          color: "#1c1a17",
          marginBottom: 76,
          maxWidth: 620,
          letterSpacing: "-0.025em",
        }}
      >
        Where I spent the last few years.
      </h2>

      <Job
        period=""
        company="StarkWare"
        role="Developer Relations Engineer"
        tags={["Cairo", "StarkNet", "ZK Proofs"]}
        bullets={[
          {
            num: "01",
            content: (
              <>
                Organized India&apos;s first-ever Cairo bootcamp, reaching{" "}
                <B>4,800+ developers</B> across 11 events nationwide.
              </>
            ),
          },
          {
            num: "02",
            content: (
              <>
                Cut onboarding time by <B>40%</B> and grew ecosystem adoption{" "}
                <B>30%</B> — mostly by rewriting docs and running hands-on
                workshops instead of sending people to read whitepapers.
              </>
            ),
          },
          {
            num: "03",
            content: (
              <>
                Ran <B>$21K in developer grants</B>. Picked projects, tracked
                them, and pushed for the ones that actually moved the needle.
              </>
            ),
          },
        ]}
        borderBottom
      />

      <Job
        period=""
        company="DablClub"
        role="Developer Relations"
        tags={["Polygon", "AggLayer", "Education"]}
        bullets={[
          {
            num: "01",
            content: (
              <>
                Took AggLayer to <B>ETH India</B> and{" "}
                <B>ETH Global Bangkok</B>. A lot of good conversations about
                what cross-chain really solves (and what it doesn&apos;t).
              </>
            ),
          },
          {
            num: "02",
            content: (
              <>
                Built <B>Dabl Learn</B>, a learning platform covering Polygon,
                AggLayer, and a few adjacent protocols.
              </>
            ),
          },
          {
            num: "03",
            content: (
              <>
                Ran DevRel across Polygon and partners: writing, events,
                showing up at hackathons, the whole thing.
              </>
            ),
          },
        ]}
      />

      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 56px 20px !important; max-width: 100% !important; }
          #experience div[class*="job-grid"] { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
