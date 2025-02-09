import useResponsive from "@/hooks/useResponsive";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AppDetails from ".";
import { LoadingIcon } from "../../../../../public/Icons/LoadingIcon";
import { ShopeyeQLogo } from "../../../../../public/Icons/WorkLogos/ShopeyeQLogo";
import Details from "./ShopeyeQDetails/Details";

export function ShopeyeQ() {
    const [loading, setLoading] = useState(true);
    const SmallScreen = useResponsive("down", "md");

    useEffect(() => {
        document.fonts.ready.then(() => {
            setLoading(false);
        });
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
            <AppDetails
                appImage="WorkDetail1.png"
                title="Empowering Sales Representatives for Peak Performance"
                infoText="By 2024, FMCG sales representatives grappled with operational inefficiencies and limited access to actionable insights. From navigating territories to ensuring accurate shelf stock data, these challenges often led to missed opportunities and suboptimal performance. ShopeyeQ transformed the sales process, enabling representatives to work smarter and drive better results."
                backgroundImageUrl="Background.jpg"
                logoComponent={<ShopeyeQLogo width={SmallScreen ? 116 : 232} height={SmallScreen ? 24 : 49} />}
            />
            <Details />
        </Container>
    );
}
