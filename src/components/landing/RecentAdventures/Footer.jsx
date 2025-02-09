import useResponsive from "@/hooks/useResponsive";
import { FooterButton, FooterButtonText, FooterSubText, FooterText } from "@/Styles";
import { Box, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Footer() {
    const isMedium = useResponsive("down", "md");
    const router = useRouter();
    const handleButtonClick = () => {
        router.push(`/Resume`);
    };

    return (
        <Stack mt={isMedium ? 0 : 10}>
            <Grid container>
                <Grid item order={isMedium ? 2 : 1} xs={12} md={4}>
                    <Box
                        component="img"
                        src="https://s3-alpha-sig.figma.com/img/3039/cac2/199bd7fb42094cd907fe1ea6163f502a?Expires=1739750400&amp;Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&amp;Signature=U43rry2GVhDz1K~jc5gs0-x8aQ3zQu3KxKvSr8M1XaLFbHg6pbEaKJedPwdkBIW6QkPRG4trXl1YwMZFneD0HdzrD1yYvheTzs1p1qwKh883TaNUQNpnGZUGwswrJ3H9My80ypIfvw7ZHGmjeuCbaY6DRZE8qr9RcpLJPvissNCQHng2GOkD9O7xvVPF9Uu5Lu5mPkcXAuBwFiHP78AYqophTWy5TPGRpf7mbX8nIj61lzocO06BwMcnT0X8srHudwZMbHJilidLgQoA0eiXFh2T4u9O60scRVF4NVX0kM5oqJolVAHw5jQo0Nn5b3683u-VhZe9-RJqgkuQs75Pcw__"
                        sx={{
                            display: "block",
                            margin: "auto",
                            width: "100%",
                            height: "auto",
                            maxWidth: { xs: "230px", md: "290px" }, // Responsive max width
                        }}
                    />
                </Grid>
                <Grid item order={isMedium ? 1 : 2} xs={12} md={8} width={712} alignContent="center">
                    <>
                        <FooterText>No Mice Were Harmed in the making of this Portfolio </FooterText>
                        <FooterSubText> (Except the Clickable Ones).</FooterSubText>
                    </>
                    <Stack mt={4} gap={2} direction={isMedium ? "column" : "row"}>
                        <FooterButton sx={{ backgroundColor: "#8C404E" }}>
                            <FooterButtonText sx={{ color: "white" }}>Drop a message</FooterButtonText>
                        </FooterButton>
                        <FooterButton onClick={() => handleButtonClick()} sx={{ backgroundColor: "white", border: "1px solid #F0F0F0" }}>
                            <FooterButtonText sx={{ color: "#8C404E" }}>View resume</FooterButtonText>
                        </FooterButton>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
}
