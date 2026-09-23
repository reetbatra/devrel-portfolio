import Image from "next/image";
import SectionHead from "./SectionHead";

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
  photoPosition: string;
}

const events: CommunityEvent[] = [
  {
    id: 1,
    badge: "Guest Speaker",
    title: "Exa Days",
    org: "Exa Protocol",
    description:
      "Talked through L1 blockchains and what decentralisation actually changes at the infrastructure level.",
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
      "Talked about DevRel as a career. Mostly demystifying it for people thinking about making the switch.",
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
      "Teaching Cairo and ZK proofs to 4,800+ developers across India. We built the StarkNet community from scratch here.",
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
      "Organized India's first Cairo bootcamp. First time most of these developers had ever touched ZK.",
    proofUrl: "https://x.com/stark_con/status/1628659312498462721",
    photo: "/p4.png",
    photoAlt: "Cairo Bootcamp session",
    overlayLabel: "Cairo Bootcamp · StarkCon",
    overlayTitle: "Introduction to Blockchain",
    photoPosition: "center 20%",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="04"
        label="Community"
        title="Where I show up."
        lede="Eleven cities, a bootcamp, and a lot of rooms where nobody had written a line of Cairo before. Teaching in person is still the fastest way I know to find out what the docs got wrong."
      />

      <div className="grid border-b border-ink sm:grid-cols-2">
        {events.map((e, i) => (
          <a
            key={e.id}
            href={e.proofUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group grid gap-5 border-b border-rule py-8 sm:grid-cols-[168px_1fr] ${
              i % 2 === 1 ? "sm:border-l sm:border-rule sm:pl-8" : "sm:pr-8"
            }`}
          >
            <div className="relative h-[190px] overflow-hidden border border-ink bg-ink">
              <Image
                src={e.photo}
                alt={e.photoAlt}
                fill
                sizes="(max-width: 640px) 100vw, 168px"
                className="object-cover saturate-[0.9] transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:saturate-100"
                style={{ objectPosition: e.photoPosition }}
              />
            </div>

            <div>
              <span className="t-label border border-rule px-2 py-1 text-[10px] text-muted">
                {e.badge}
              </span>
              <h3 className="t-head mt-4 text-[24px]">{e.title}</h3>
              <div className="t-label mt-1.5 text-blue">{e.org}</div>
              <p className="mt-3 text-[14.5px] leading-[1.62] text-muted">
                {e.description}
              </p>
              <div className="t-label mt-4 text-faint transition-colors group-hover:text-ink">
                View proof ↗
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
