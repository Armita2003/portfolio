import useResponsive from "@/hooks/useResponsive";
import { WorkDetailLandingBox, WorkDetailLandingHeaderSubText, WorkDetailLandingHeaderText } from "@/Styles";
import { Stack } from "@mui/material";

export default function LandingMainText({ logo }) {
    const SmallScreen = useResponsive("down", "md");
    const MediumScreen = useResponsive("down", "lg");
    return (
        <WorkDetailLandingBox>
            <Stack direction="row">
                <Stack>{logo}</Stack>
            </Stack>
            <Stack gap={3} pb={10}>
                <Stack height={SmallScreen ? "100%" : MediumScreen ? "100%" : 130}>
                    <WorkDetailLandingHeaderText>Empowering Sales Representatives for Peak Performance</WorkDetailLandingHeaderText>
                </Stack>
                <Stack width={SmallScreen ? "100%" : MediumScreen ? "100%" : 699} height={SmallScreen ? "100%" : 135}>
                    <WorkDetailLandingHeaderSubText>
                        By 2024, FMCG sales representatives grappled with operational inefficiencies and limited access to actionable insights. From
                        navigating territories to ensuring accurate shelf stock data, these challenges often led to missed opportunities and
                        suboptimal performance. ShopeyeQ transformed the sales process, enabling representatives to work smarter and drive better
                        results.
                    </WorkDetailLandingHeaderSubText>
                </Stack>
            </Stack>
        </WorkDetailLandingBox>
    );
}
