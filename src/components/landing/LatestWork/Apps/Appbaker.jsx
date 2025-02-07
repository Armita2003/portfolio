import { useEffect, useState } from "react";
import { LoadingIcon } from "../../../../../public/Icons/LoadingIcon";
export function Appbaker() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay (e.g., fetching data or waiting for page to load)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change delay as needed

        return () => clearTimeout(timer);
    }, []);

    return loading ? <LoadingIcon /> : <h1>Appbaker</h1>;
}
