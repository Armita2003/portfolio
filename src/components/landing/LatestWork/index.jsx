import useResponsive from "@/hooks/useResponsive";
import { Tags, TagTypography } from "@/Styles";
import { Stack } from "@mui/material";
import RecentAdventures from "../RecentAdventures";
import Footer from "../RecentAdventures/Footer";
import LatestWorkGrid from "./LatestWorkGrid";

export default function LatestWork() {
    const isSmallScreen = useResponsive("down", "md");
    return (
        <Stack mt={isSmallScreen ? 8 : 19.6} gap={3}>
            <Tags width={116} height={36}>
                <TagTypography width={92} height={15} color="black">
                    Latest
                    <span style={{ color: "#8C404E" }}> Works</span>
                </TagTypography>
            </Tags>
            <LatestWorkGrid />
            <RecentAdventures />
            <Footer />
        </Stack>
    );
}
