import useResponsive from "@/hooks/useResponsive";
import { Adventure, AdventureCompanyTypography, AdventureListTypography, AdventureLocationTypography, AdventureRoleTypography } from "@/Styles";
import { Grid, Stack } from "@mui/material";

export default function Adventures() {
    const smallScreen = useResponsive("down", "md");

    return (
        <Stack>
            <Grid container>
                {Adventure.map((items) => {
                    return (
                        <>
                            <Grid item xs={12} md={4} sx={{ mb: smallScreen ? 3 : 0 }}>
                                <AdventureCompanyTypography width={89}>{items.company}</AdventureCompanyTypography>
                            </Grid>
                            <Grid item xs={12} md={8} mb={smallScreen ? 4.5 : 9}>
                                <Stack>
                                    <AdventureRoleTypography>{items.role}</AdventureRoleTypography>
                                </Stack>
                                <Stack>
                                    <AdventureLocationTypography>{items.location}</AdventureLocationTypography>
                                </Stack>
                                <Stack>
                                    <ul>
                                        {items.list.map((list) => {
                                            return (
                                                <li>
                                                    <AdventureListTypography>{list}</AdventureListTypography>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Stack>
                            </Grid>
                        </>
                    );
                })}
            </Grid>
        </Stack>
    );
}
