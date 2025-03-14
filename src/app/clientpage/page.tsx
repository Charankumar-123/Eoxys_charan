"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Typography, Container, Grid } from "@mui/material"; // Import Material-UI
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

const clients = [
  { id: 1, imgPath: "/images/clientlogo/equbot.jpg" },
  { id: 2, imgPath: "/images/clientlogo/iitm.jpg" },
  { id: 3, imgPath: "/images/clientlogo/iiscb1.png" },
  { id: 4, imgPath: "/images/clientlogo/cumi.png" },
  { id: 5, imgPath: "/images/clientlogo/itc2.png" },
  { id: 6, imgPath: "/images/clientlogo/tringapps.png" },
  { id: 7, imgPath: "/images/clientlogo/reckitt.png" },
  { id: 8, imgPath: "/images/clientlogo/Uom.png" },
  { id: 9, imgPath: "/images/clientlogo/daimler.png" },
];

export default function Clients() {
  const [chars, setChars] = useState<string[]>([]);


  useEffect(() => {
    setChars("Our Clients".split(""));
    gsap.fromTo(
      ".char-client",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section className="py-16" id="clients">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center">
            {/* Matching "Our Partners" Font */}
            <Typography variant="overline" color="textSecondary">
              Eoxys
            </Typography>

            <Typography variant="h3" color="textPrimary" fontWeight="bold">
              {chars.map((char, index) => (
                <span key={index} className="char-client">{char}</span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className="mt-10">
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
              Turning Ideas Into Success Stories
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Clients Continuous Scrolling */}
      <div className="w-full mt-12 space-y-8">
        <InfiniteMovingCards items={clients} direction="left" speed="fast" />
        <InfiniteMovingCards items={clients} direction="right" speed="normal" />
        <InfiniteMovingCards items={clients} direction="left" speed="slow" />
      </div>
    </section>
  );
}
