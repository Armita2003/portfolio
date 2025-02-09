import "@/styles/globals.css";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { LoadingIcon } from "../public/Icons/LoadingIcon";

const ppHatton = localFont({
    // src: "../public/fonts/hatton/PPHatton-Medium.otf",
    src: [
        {
            path: "../public/fonts/hatton/PPHatton-Medium.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/hatton/PPHatton-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-pphatton",
    display: "swap",
});
const satoshi = localFont({
    src: [
        {
            path: "../public/fonts/Satoshi/Satoshi-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-satoshi",
    display: "swap",
});
export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const handleStart = () => setLoading(true);
    //     const handleComplete = () => setLoading(false);

    //     const timeout = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);

    //     return () => clearTimeout(timeout);
    // }, []);
    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // Add event listener to handle when the window is fully loaded
        window.addEventListener("load", handleLoad);

        // Fallback timeout in case the page takes too long to load
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the timeout as needed

        // Clean up the event listener and timeout
        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <>
            <main className={`${ppHatton.variable} ${satoshi.variable}`}>{getLayout(<Component {...pageProps} />)}</main>
        </>
    );
}
