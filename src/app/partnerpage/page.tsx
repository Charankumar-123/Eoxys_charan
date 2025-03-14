"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import LaunchIcon from "@mui/icons-material/Launch";

const partners = [
  { title: "InnophaseIoT", image: "/images/partnerlogo/InnoPhaseIoT.png", link: "https://innophaseiot.com/talaria-two-modules/" },
  { title: "Syntiant", image: "/images/partnerlogo/syntiant.png", link: "https://www.syntiant.com/" },
  { title: "Renesas", image: "/images/partnerlogo/RenesasElectronicslogo.png", link: "https://www.renesas.com/us/en" },
  { title: "Nuvoton", image: "/images/partnerlogo/nuvoton.png", link: "https://www.nuvoton.com/" }
];

export default function Partners() {
  const [chars, setChars] = useState<string[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setChars("Our Partners".split(""));
    gsap.fromTo(
      ".char",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section className="py-16" id="partners">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="overline" color="textSecondary">Eoxys</Typography>
            <Typography variant="h3" color="textPrimary" fontWeight="bold">
              {chars.map((char, index) => (
                <span key={index} className="char">{char}</span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className="mt-10">
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
              Empowering Progress Together, Building Stronger Futures with Our Partners.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <Link 
              href={partner.link} 
              key={idx} 
              className="relative group block p-3 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-xl min-h-[220px] sm:min-h-[250px] w-full p-5 bg-white  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-md flex flex-col items-center justify-center transition-all duration-300">
                <Image src={partner.image} alt={partner.title} width={210} height={140} className="object-contain" />
                <Typography variant="h6" className="text-zinc-900 dark:text-zinc-100 font-semibold tracking-wide mt-3">
                  {partner.title}
                </Typography>
                <LaunchIcon className="absolute bottom-4 right-4 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-200 text-2xl" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}