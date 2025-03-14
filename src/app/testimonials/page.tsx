"use client";

import { Box, Paper, Typography, Container } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const testimonials = [
    {
        label: "We appreciate Eoxys technical team’s effort for developing team worked and delivered well what they have committed...",
        imgPath: "/images/testimonials/testimonial_icon1.png",
        footer: "By Major Indian Industrial Pipeline Manufacturer",
    },
    {
        label: "We appreciate Eoxys XENO+ WiFi+BLE nano module, an elegant device with technology compactness...",
        imgPath: "/images/testimonials/testimonial_icon1.png",
        footer: "By Reputed Engineering University",
    },
    {
        label: "Eoxys’ TuneApp server is a user-friendly tool as a plug-and-play type of software to build executable process blocks...",
        imgPath: "/images/testimonials/testimonial_icon1.png",
        footer: "By Major Japanese MNC Company",
    },
    {
        label: "Great time with Eoxys team for developing our AIML – Audio and Image classification device for pest sensing...",
        imgPath: "/images/testimonials/testimonial_icon1.png",
        footer: "By Major German MNC Company",
    },
    {
        label: "Awesome Eoxys team for timely delivery of ECU unit and the device is working as expected...",
        imgPath: "/images/testimonials/testimonial_icon1.png",
        footer: "By Major Indian Automotive OEM",
    },
];

export default function Testimonials() {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const children = (textRef.current as HTMLElement).children; // Type assertion
            gsap.fromTo(
                children,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
            );
        }
    }, []);
    

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                px: 2,
                py: 6,
                overflow: "visible",
            }}
        >
            {/* Title Section */}
            <Container sx={{ textAlign: "center", mb: 4, maxWidth: "lg" }}>
                <Typography variant="overline" fontWeight="light" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, color: "gray" }}>
                    Eoxys
                </Typography>
                <Typography variant="h2" fontWeight="bold" color="dark" sx={{ mt: 1, fontSize: { xs: "2rem", sm: "3rem" } }} ref={textRef}>
                    Testimonials
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 3, fontSize: { xs: "0.9rem", sm: "1.2rem" } }}>
                    See what our customers have to say.
                </Typography>
            </Container>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                navigation
                loop={true} // Ensures infinite loop
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 }, // Mobile
                    640: { slidesPerView: 1, spaceBetween: 25 }, // Small devices
                    768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 40 }, // Laptops & Desktops
                }}
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    padding: "0 70px",
                }}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "auto", // Dynamically adjusts height
                            overflow: "visible",
                        }}
                    >
                        <Paper
                            elevation={5}
                            sx={{
                                width: "100%",
                                maxWidth: 400,
                                minHeight: 400, // Ensure cards have enough space
                                p: { xs: 3, md: 4 },
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 6,
                                overflow: "visible", // Prevent content cutoff
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                                },
                                mx: "auto",
                            }}
                        >
                            <Image src={item.imgPath} alt="Testimonial" width={80} height={80} />

                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    fontWeight: 500,
                                    textAlign: "justify",
                                }}
                            >
                                {item.label}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mt: 1,
                                    fontSize: { xs: "0.85rem", sm: "1rem" },
                                    fontWeight: 600,
                                }}
                            >
                                {item.footer}
                            </Typography>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
