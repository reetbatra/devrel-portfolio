"use client";

import { useState } from "react";
import Image from "next/image";

interface CommunityEvent {
  id: number;
  badge: string;
  title: string;
  org: string;
  description: string;
  proofUrl: string;
  photo: string;
  photoAlt: string;
  overlayLabel: string;
  overlayTitle: string;
  photoPosition?: string;
}

const events: CommunityEvent[] = [
  {
    id: 1,
    badge: "Guest Speaker",
    title: "Exa Days",
    org: "Exa Protocol",
    description:
      "L1 Blockchains and Decentralisation, exploring the architecture behind the future of the internet.",
    proofUrl: "https://x.com/ExaProtocol/status/1656280478591201283",
    photo: "/p1.jpeg",
    photoAlt: "Exa Days talk",
    overlayLabel: "Exa Days · Guest Speaker",
    overlayTitle: "L1 Blockchains & Decentralisation",
    photoPosition: "center top",
  },
  {
    id: 2,
    badge: "Guest Speaker",
    title: "Tribe Academy",
    org: "Workshop",
    description:
      "Exploring DevRel as a career choice, mentoring the next wave of developer advocates in Web3.",
    proofUrl: "https://x.com/tribeacademy_in/status/1659239504149118977",
    photo: "/p2.jpeg",
    photoAlt: "Tribe Academy masterclass",
    overlayLabel: "Tribe Academy · Free Masterclass",
    overlayTitle: "Exploring DevRel as a Career",
    photoPosition: "center",
  },
  {
    id: 3,
    badge: "Offline Meetup Series",
    title: "StarkCon",
    org: "Pan-India · 11 Cities",
    description:
      "Teaching Cairo and ZK proofs to 4,800+ developers across India. Built the StarkNet community from the ground up.",
    proofUrl: "https://x.com/stark_con/status/1605872741944418305",
    photo: "/p3.jpeg",
    photoAlt: "StarkCon meetup",
    overlayLabel: "StarkCon · Pan-India",
    overlayTitle: "Cairo & ZK Proofs Workshops",
    photoPosition: "center top",
  },
  {
    id: 4,
    badge: "Organizer",
    title: "Cairo Bootcamp",
    org: "India's First",
    description:
      "Organized India's first-ever Cairo bootcamp, a landmark moment for the Indian ZK developer community.",
    proofUrl: "https://x.com/stark_con/status/1628659312498462721",
    photo: "/p4.png",
    photoAlt: "Cairo Bootcamp session",
    overlayLabel: "Cairo Bootcamp · StarkCon",
    overlayTitle: "Introduction to Blockchain",
    photoPosition: "center 20%",
  },
];

function CommunityCard({ event }: { event: CommunityEvent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#221f1c",
        padding: 36,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          padding: "3px 11px",
          background: "rgba(200,115,88,0.12)",
          border: "1px solid rgba(200,115,88,0.28)",
          borderRadius: 100,
          color: "#c87358",
          letterSpacing: "0.06em",
          marginBottom: 22,
        }}
      >
        {event.badge}
      </div>
      <h4
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: 26,
          color: "#fdfaf5",
          marginBottom: 6,
          letterSpacing: "-0.01em",
        }}
      >
        {event.title}
      </h4>
      <div
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: "#504840",
          letterSpacing: "0.06em",
          marginBottom: 14,
          textTransform: "uppercase",
        }}
      >
        {event.org}
      </div>
      <p
        style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          fontSize: 14,
          color: "#7a6d63",
          lineHeight: 1.65,
        }}
      >
        {event.description}
      </p>
      <a
        href={event.proofUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="proof-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: "#c87358",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginTop: 16,
          transition: "opacity 0.2s",
        }}
      >
        View proof ↗
      </a>

      {/* Photo overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <Image
          src={event.photo}
          alt={event.photoAlt}
          fill
          style={{
            objectFit: "cover",
            objectPosition: event.photoPosition || "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.1) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 24,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            {event.overlayLabel}
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: 18,
              color: "#fff",
            }}
          >
            {event.overlayTitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <div id="community" style={{ background: "#1c1a17", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "#c87358",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            04 — Community
          </span>
          <div style={{ flex: 1, height: 1, background: "#302c28" }} />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(40px, 4vw, 58px)",
            lineHeight: 1.08,
            color: "#fdfaf5",
            marginBottom: 14,
            letterSpacing: "-0.025em",
            maxWidth: 580,
          }}
        >
          Giving back to the community.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: 16,
            color: "#6b6056",
            marginBottom: 56,
            maxWidth: 500,
            lineHeight: 1.68,
          }}
        >
          The Web3 and AI communities gave me the foundation I build on. I pay
          it forward every chance I get.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
          }}
        >
          {events.map((event) => (
            <CommunityCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <style>{`
        .proof-link:hover { opacity: 0.7; }
        @media (max-width: 768px) {
          #community { padding: 56px 20px !important; }
          #community > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
