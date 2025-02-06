import { Container } from "@mui/material";

export default function MainLayout({ children }) {
    return (
        <Container maxWidth="lg" sx={{ paddingRight: "24px", paddingLeft: "24px", paddingTop: "32px", paddingBottom: "32px" }}>
            {children}
        </Container>
    );
}
