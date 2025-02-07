import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";
import { LoadingIcon } from "../../../../../public/Icons/LoadingIcon";
import ShopeyeQDetails from "./ShopeyeQDetails";
import Details from "./ShopeyeQDetails/Details";

export function ShopeyeQ() {
    const [loading, setLoading] = useState(true);
    const SmallScreen = useResponsive("down", "md");

    useEffect(() => {
        document.fonts.ready.then(() => {
            setLoading(false);
        });
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <>
            <ShopeyeQDetails />
            <Details />
        </>
    );
}
