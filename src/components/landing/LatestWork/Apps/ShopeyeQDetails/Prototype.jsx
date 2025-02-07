import { Stack } from "@mui/material";
import { useState } from "react";
import { LoadingIcon } from "../../../../../../public/Icons/LoadingIcon";

const Prototype = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Stack width="100vw" height="100vh" alignItems="center" justifyContent="center" sx={{ overflow: "hidden" }}>
            {loading && <LoadingIcon />}
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
                src="https://embed.figma.com/proto/jbfhT6uQw3Q9nk371JiAca/R?page-id=&node-id=435-85781&node-type=frame&viewport=-2599%2C6425%2C1&scaling=contain&content-scaling=fixed&starting-point-node-id=435%3A85792&show-proto-sidebar=1&embed-host=share"
                allowFullScreen
                onLoad={() => setLoading(false)}
            ></iframe>
        </Stack>
    );
};

export default Prototype;
