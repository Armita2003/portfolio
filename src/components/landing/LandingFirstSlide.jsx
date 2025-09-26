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
                sx={{
                  fontSize: isExtraSmallScreen ? 20 : isSmallScreen ? 16 : isMediumScreen ? 28 : 32,
                  fontWeight: 700,
                }}
                className="landing"
              >
                UX So Intuitive, Even Your Cat Could Use It.
              </Typography>
              <Typography
                sx={{ fontSize: isExtraSmallScreen ? 12 : isSmallScreen ? 10 : 16 }}
                fontWeight={500}
                className="landingTypography"
                lineHeight={"26px"}
              >
                <strong>Senior UI/UX Designer </strong> with 9 years of experience in e-commerce, healthcare, and
                enterprise platforms. Specialized in
                <strong> UX research, design systems, and data visualization</strong>, consistently improving usability
                and retention. Skilled at collaborating with global teams and aligning design with business goals for
                successful product launches.
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
      <Box
        component="img"
        src="/HeroCatAnimation.gif"
        sx={{
          display: "block",
          position: "relative",
          bottom: 0,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: "none",
        }}
      />
    </Container>
  );
}
