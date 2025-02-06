import { Landing } from "@/components/landing";
import Layout from "@/layouts";

const HomePage = () => {
    return <Landing />;
};

HomePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default HomePage;
