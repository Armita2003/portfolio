import useResponsive from "@/hooks/useResponsive";
import { LatestWorkCircle, LatestWorkContainers, LatestWorkHoverText, LatestWorkRoleTypography, LatestWorkTitleTypography, Works } from "@/Styles";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function LatestWorkGrid() {
    const ExtraSmallScreen = useResponsive("down", "sm");
    const SmallScreen = useResponsive("down", "md");
    const MediumSmallScreen = useResponsive("down", "lg");

    const router = useRouter();

    const handleCardClick = (name) => {
        router.push(`/Work/${encodeURIComponent(name)}`);
    };

    return (
        <Stack mb={SmallScreen ? 8 : 22.3}>
            <Grid container sx={{ rowGap: 2.5, columnGap: 2.5, display: "flex", justifyContent: "space-evenly" }}>
                {Works.map((items, index) => {
                    return (
                        <Grid item xs={12} md={4.75} lg={3.8}>
                            <LatestWorkContainers
                                onClick={() => handleCardClick(items.name)}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    cursor: "pointer",
                                    "@media (min-width: 1024px)": {
                                        ":hover": {
                                            background: "linear-gradient(to right, white 60%, black 40%)",
                                        },

                                        "&:hover .circle": {
                                            opacity: 0,
                                        },
                                        ":hover::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: "rgba(140, 64, 78, 0.8)",
                                            zIndex: 1,
                                            backdropFilter: "blur(5px)",
                                        },
                                        "&:hover .viewText": {
                                            opacity: 1,
                                            visibility: "visible",
                                        },
                                        "&:hover .texts": {
                                            opacity: 0.5,
                                            filter: "blur(2px)",
                                        },
                                    },
                                }}
                            >
                                <LatestWorkHoverText className="viewText" sx={{}}>
                                    View Case Study
                                </LatestWorkHoverText>
                                <Stack direction={ExtraSmallScreen ? "column" : "row"} justifyContent="space-between">
                                    <Stack gap={1} mt="3px">
                                        <LatestWorkTitleTypography className="texts"> {items.title}</LatestWorkTitleTypography>
                                        <LatestWorkRoleTypography className="texts"> {items.role}</LatestWorkRoleTypography>
                                    </Stack>

                                    <Stack>
                                        <LatestWorkCircle
                                            className="circle"
                                            sx={{
                                                background: items.color,
                                                width: { xs: "230px", md: "180px", lg: "212px" },
                                                height: { xs: "230px", md: "180px", lg: "212px" },

                                                alignSelf: ExtraSmallScreen ? "center" : "auto",
                                            }}
                                        ></LatestWorkCircle>
                                        <img
                                            style={{
                                                position: "absolute",
                                                bottom: ExtraSmallScreen ? "60px" : index == 3 ? "20px" : "10px",
                                                width: "100%",
                                                maxWidth: ExtraSmallScreen
                                                    ? "270px"
                                                    : SmallScreen
                                                    ? " 290px"
                                                    : MediumSmallScreen
                                                    ? "245px"
                                                    : index == 3
                                                    ? "290px"
                                                    : "270px",
                                                height: "auto",
                                                right: ExtraSmallScreen ? "auto" : SmallScreen ? 20 : MediumSmallScreen ? 15 : 5,

                                                alignContent: "center",

                                                alignItems: "center",
                                                margin: "auto",
                                                justifyContent: "center",
                                                justifyItems: "center",
                                                justifySelf: "center",
                                                alignSelf: "center",
                                            }}
                                            src={items.image}
                                            alt={items.title}
                                        />
                                    </Stack>
                                </Stack>
                            </LatestWorkContainers>
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
}
