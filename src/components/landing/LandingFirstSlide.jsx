import useResponsive from "@/hooks/useResponsive";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LandingFirstSlide() {
    const isMediumScreen = useResponsive("down", "lg");
    const isSmallScreen = useResponsive("down", "md");
    const isExtraSmallScreen = useResponsive("down", "sm");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (isVisible) {
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 2000);
        }
        return () => clearTimeout(timeoutId);
    }, [isVisible]);

    const handleMouseMove = () => {
        setIsVisible(true);
    };

    return (
        <Container onMouseMove={handleMouseMove} maxWidth="xl" sx={{ padding: "0px !important" }}>
            <Box
                component="img"
                src="/HeroCatAnimation.gif"
                sx={{
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    pointerEvents: "none",
                }}
            />
            <Grid container justifyContent="space-evenly" direction="row" pt={"32px"}>
                <Grid sm={6} item py={isExtraSmallScreen ? 5 : isSmallScreen ? "10px" : "119.5px"} alignSelf="center">
                    <Stack
                        alignContent="center"
                        alignSelf="center"
                        p={isExtraSmallScreen ? 0 : 1}
                        pr={isExtraSmallScreen ? 0 : isSmallScreen ? 8 : 10}
                    >
                        <Stack maxWidth={isExtraSmallScreen ? "100%" : isSmallScreen ? "330px" : "100%"} gap={2}>
                            <Typography
                                mb={0}
                                sx={{ fontSize: isExtraSmallScreen ? 20 : isSmallScreen ? 16 : isMediumScreen ? 28 : 32, fontWeight: 700 }}
                                className="landing"
                            >
                                UX So Intuitive, Even Your Cat Could Use It.
                            </Typography>
                            <Typography
                                sx={{ fontSize: isExtraSmallScreen ? 12 : isSmallScreen ? 10 : 16 }}
                                fontWeight={500}
                                className="landingTypography"
                                lineHeight={"22px"}
                            >
                                Senior UI/UX Designer with 10+ years of experience driving end-to-end design for global startups and enterprise
                                products. Skilled in research, design strategy, and cross-functional collaboration to deliver impactful, user-centered
                                digital solutions.
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid sm={6} margin="auto" item width="100%" height="100%">
                    <Stack position="relative">
                        <img
                            style={{
                                width: isExtraSmallScreen ? "80%" : isSmallScreen ? "100%" : "100%",
                                height: isExtraSmallScreen ? "80%" : isSmallScreen ? "100%" : "100%",
                                maxWidth: "527px",
                                margin: "auto",
                            }}
                            src="/ProfilePic.png"
                            alt="Profile Picture"
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
