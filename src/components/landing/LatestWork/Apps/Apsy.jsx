import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { LoadingIcon } from "../../../../../public/Icons/LoadingIcon";
export function Apsy() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <Stack>
            <Container></Container>
        </Stack>
    );
}
