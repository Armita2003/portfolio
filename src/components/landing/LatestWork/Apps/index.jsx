import useResponsive from "@/hooks/useResponsive";
import { WorkDetailContainer, WorkDetailLandingBox, WorkDetailLandingHeaderSubText, WorkDetailLandingHeaderText } from "@/Styles";
import { Box, Stack } from "@mui/material";

export default function AppDetails({ backgroundImageUrl, appImage, logoComponent, title, infoText, textColor, subTextColor }) {
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");
    return (
        <WorkDetailContainer
            container
            justifyContent="space-between"
            sx={{
                zIndex: -10,
                backgroundImage: `url(/${backgroundImageUrl})`,
                backgroundSize: "cover",
                position: "relative",
                backgroundRepeat: "no-repeat",
                maxHeight: "832px",
                height: "832px",
            }}
        >
            <WorkDetailLandingBox>
                <Stack direction="row">
                    <Stack>{logoComponent}</Stack>
                </Stack>
                <Stack gap={3}>
                    <Stack>
                        <WorkDetailLandingHeaderText color={textColor}>{title}</WorkDetailLandingHeaderText>
                    </Stack>
                    <Stack maxWidth="100%" width={MediumScreen ? "100%" : 720} height={SmallScreen ? "100%" : 135}>
                        <WorkDetailLandingHeaderSubText color={subTextColor}>{infoText}</WorkDetailLandingHeaderSubText>
                    </Stack>
                </Stack>
            </WorkDetailLandingBox>

            <Box maxWidth="100%" maxHeight="100%" margin="auto">
                <Stack
                    display="flex"
                    alignItems={SmallScreen ? "center" : "end"}
                    justifyContent={SmallScreen ? "center" : "end"}
                    width={SmallScreen ? "100%" : "100%"}
                    height={SmallScreen ? "100%" : "100%"}
                    position={SmallScreen ? "relative" : "absolute"}
                    sx={{
                        margin: SmallScreen ? "auto" : "auto",
                        right: SmallScreen ? "0" : "80px",
                        bottom: SmallScreen ? "0" : "72px",
                    }}
                >
                    <img
                        src={`/WorkDetail/${appImage}`}
                        alt="Work Detail"
                        style={{
                            width: SmallScreen ? "90%" : "600px",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            display: "block",
                        }}
                    />
                </Stack>
            </Box>
        </WorkDetailContainer>
    );
}
