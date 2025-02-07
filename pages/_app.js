import "@/styles/globals.css";
import localFont from "next/font/local";

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

    return (
        <>
            <main className={`${ppHatton.variable} ${satoshi.variable}`}>{getLayout(<Component {...pageProps} />)}</main>
        </>
    );
}
