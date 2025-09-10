import useResponsive from "@/hooks/useResponsive";
import { Stack, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../../public/Icons/Logo";

export function Header() {
    const [activeLink, setActiveLink] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/") {
            setActiveLink("Work");
            localStorage.setItem("activeLink", "Work");
        } else {
            const savedActiveLink = localStorage.getItem("activeLink") || "Work";
            setActiveLink(savedActiveLink);
        }
    }, [router.pathname]);

    const handleClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", link);
    };

    const isSmallScreen = useResponsive("down", "md");
    return (
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap={isSmallScreen ? 1 : 2}>
                <Stack width={isSmallScreen ? 20 : 24} height={isSmallScreen ? 20 : 24}>
                    <Logo />
                </Stack>
                <Typography sx={{ mt: 0.2, fontSize: isSmallScreen ? 13 : 16 }} className="heading">
                    Maris Niibek
                </Typography>
            </Stack>

            <SubLink
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Work")}
                className={`headerSubLinks ${activeLink === "Work" ? "active" : ""}`}
            >
                Work
            </SubLink>
        </Stack>
    );
}

const SubLink = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: "black",
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
        fontSize: 12,
    },
}));
