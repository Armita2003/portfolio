import { Header } from "../header";
import LandingFirstSlide from "./FirstSlide";
import LatestWork from "./LatestWork";

export function Landing(props) {
    return (
        <>
            <Header />
            <LandingFirstSlide />
            <LatestWork />
        </>
    );
}
