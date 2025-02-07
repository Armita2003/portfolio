import useResponsive from "@/hooks/useResponsive";
import {
    Adventure,
    ResumeBody,
    ResumeCategory,
    ResumeContact,
    ResumeDesignLocationTypography,
    ResumeDesignRole,
    ResumeListTypography,
    ResumeMainBody,
    ResumeRole,
    ResumeTitle,
    Skills,
} from "@/Styles";
import { Grid, Stack } from "@mui/material";
import { EmailIcon } from "../../../public/Icons/EmailIcon";
import { PhoneIcon } from "../../../public/Icons/PhoneIcon";

export default function Resume() {
    const smallScreen = useResponsive("down", "md");
    return (
        <ResumeBody maxWidth={false}>
            <ResumeMainBody>
                <Stack mb={11.9} justifyContent="space-between" mt={2} direction={smallScreen ? "column" : "row"}>
                    <Stack>
                        <ResumeTitle>Ersa Khorsandi</ResumeTitle>
                        <ResumeRole>UI/UX Designer</ResumeRole>
                    </Stack>
                    <Stack>
                        <Stack direction="row" mt={smallScreen ? 1.5 : 0} gap={1}>
                            <Stack alignSelf="center">
                                <EmailIcon />
                            </Stack>
                            <ResumeContact>mir.ersa@gmail.com</ResumeContact>
                        </Stack>
                        <Stack direction="row" gap={1}>
                            <Stack alignSelf="center">
                                <PhoneIcon />
                            </Stack>
                            <ResumeContact>0903 874 0917</ResumeContact>
                        </Stack>
                    </Stack>
                </Stack>
                <Grid container gap={6} px={1}>
                    <Grid item xs={12} md={7}>
                        <ResumeCategory>
                            <span
                                style={{
                                    textUnderlineOffset: "18px",
                                    textDecoration: "1px #8c404e underline",
                                }}
                            >
                                DESIG
                            </span>
                            N HISTORY
                        </ResumeCategory>
                        <Stack mt={5.3}>
                            {Adventure.map((items, index) => {
                                return (
                                    <Stack key={index} width="100%" maxWidth={smallScreen ? "100%" : 753}>
                                        <Stack sx={{ mb: smallScreen ? 3 : 0 }}>
                                            <ResumeDesignRole>
                                                {items.company} | <span style={{ fontWeight: 600 }}>{items.role}</span>
                                            </ResumeDesignRole>
                                        </Stack>
                                        <Stack mb={smallScreen ? 2.2 : 5.3}>
                                            <Stack>
                                                <ResumeDesignLocationTypography>{items.location}</ResumeDesignLocationTypography>
                                            </Stack>
                                            <Stack>
                                                <ul>
                                                    {items.list.map((list) => {
                                                        return (
                                                            <li>
                                                                <ResumeListTypography>{list}</ResumeListTypography>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ResumeCategory>
                            <span
                                style={{
                                    textUnderlineOffset: "18px",
                                    textDecoration: "1px #8c404e underline",
                                }}
                            >
                                SKILL
                            </span>
                            S
                        </ResumeCategory>
                        <Grid container mb={10}>
                            {Skills.map((items, index) => {
                                return (
                                    <Grid key={index} item xs={12} sm={index >= 2 ? 4 : 6} md={12} mt={5.3}>
                                        <Stack width="100%" maxWidth={smallScreen ? "100%" : 753}>
                                            <Stack sx={{ mb: smallScreen ? 3 : 0 }}>
                                                <ResumeDesignRole>{items.title}</ResumeDesignRole>
                                            </Stack>
                                            <Stack>
                                                <Stack>
                                                    <ul>
                                                        {items.list.map((items) => {
                                                            return (
                                                                <li>
                                                                    <ResumeListTypography>{items}</ResumeListTypography>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </ResumeMainBody>
        </ResumeBody>
    );
}
