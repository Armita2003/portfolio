import useResponsive from "@/hooks/useResponsive";
import { WorkDetailContainer } from "@/Styles";
import { Box, Container, Stack } from "@mui/material";
import { ShopeyeQLogo } from "../../../../../../public/Icons/WorkLogos/ShopeyeQLogo";
import LandingMainText from "../LandingMainText";

export default function ShopeyeQDetails() {
    const ExtraSmallScreen = useResponsive("down", "sm");
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");
    return (
        <Container maxWidth="lg" sx={{ padding: "0px !important", height: SmallScreen ? 680 : 832 }}>
            <Box
                sx={{
                    padding: "0px !important",
                    zIndex: -10,
                    backgroundImage: "url(/Background.jpg)",
                    backgroundSize: "cover",
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Stack
                    width={ExtraSmallScreen ? "90%" : SmallScreen ? "60%" : 542}
                    height="auto"
                    sx={{
                        position: "absolute",
                        bottom: ExtraSmallScreen ? 60 : 20,
                        right: ExtraSmallScreen ? 0 : MediumScreen ? "20%" : 20,
                        objectFit: "contain",
                    }}
                >
                    <img
                        src="/WorkDetail/WorkDetail1.png"
                        alt="Work Detail"
                        style={{
                            width: "80%",
                        }}
                    />
                </Stack>
                <WorkDetailContainer>
                    <LandingMainText logo={<ShopeyeQLogo width={SmallScreen ? 116 : 232} height={SmallScreen ? 24 : 49} />} />
                </WorkDetailContainer>
            </Box>
        </Container>
    );
}
