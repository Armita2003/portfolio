import { Button, Card, Container, Stack, styled, Typography } from "@mui/material";

export const Tags = styled(Stack)(() => ({
    borderRadius: 35,
    border: "1px solid rgba(0, 0, 0, 0.1)",
    padding: "12px 12px 9px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const TagTypography = styled(Typography)(({}) => ({
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 12,
    textAlign: "center",
}));

export const LatestWorkContainers = styled(Card)(({}) => ({
    height: "auto",
    border: "1px solid #E2E2E2",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: 8,
}));

export const LatestWorkTitleTypography = styled(Typography)(({}) => ({
    width: 117,
    height: 25,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 20,
    color: "black",
    zIndex: 1,
}));
export const LatestWorkRoleTypography = styled(Typography)(({}) => ({
    height: 14,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 500,
    fontSize: 10,
    color: "#404040",
    zIndex: 1,
}));

export const LatestWorkHoverText = styled(Stack)(({}) => ({
    height: 22,
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    opacity: 0,
    visibility: "hidden",
}));

export const AdventureCompanyTypography = styled(Typography)(({ theme }) => ({
    height: 45,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 500,
    fontSize: 36,
    color: "black",
    [theme.breakpoints.down("md")]: {
        fontSize: 28,
    },
}));
export const AdventureRoleTypography = styled(Typography)(({ theme }) => ({
    height: 30,
    fontFamily: ` var(--font-pphatton), serif`,
    fontSize: 24,
    color: "#404040",
    marginBottom: 4,
    [theme.breakpoints.down("md")]: {
        fontSize: 20,
        marginBottom: 2,
    },
}));
export const AdventureLocationTypography = styled(Typography)(({ theme }) => ({
    height: 20,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 500,
    fontSize: 16,
    color: "#8A8A8A",
    marginBottom: 16,
    [theme.breakpoints.down("md")]: {
        fontSize: 12,
        marginBottom: 8,
    },
}));
export const AdventureListTypography = styled(Typography)(({ theme }) => ({
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 500,
    fontSize: 12,
    color: "#404040",
    [theme.breakpoints.down("md")]: {
        fontSize: 11,
    },
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 32,
    color: "#8C404E",
    display: "inline",
    [theme.breakpoints.down("md")]: {
        fontSize: 23,
    },
}));

export const FooterSubText = styled(Typography)(({ theme }) => ({
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 20,
    display: "inline",
    color: "black",
    [theme.breakpoints.down("md")]: {
        fontSize: 16,
    },
}));

export const FooterButton = styled(Button)(({}) => ({
    borderRadius: 32,
    paddingTop: 19,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 8,
    textTransform: "none",
}));

export const FooterButtonText = styled(Typography)(({}) => ({
    height: 33,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "33.22px",
}));

export const ResumeBody = styled(Container)(({}) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/ResumeImage.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: 30,
    "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(140, 64, 78, 0.5)",
    },
}));

export const ResumeMainBody = styled(Container)(({ theme }) => ({
    position: "relative",
    backgroundColor: "white",
    height: "100%",
    padding: 40,
    [theme.breakpoints.down("md")]: {
        padding: 20,
    },
}));

export const ResumeTitle = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 48,
    color: "#1F1F1F",
    [theme.breakpoints.down("sm")]: {
        fontSize: 28,
    },
}));

export const ResumeRole = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 24,
    color: "#07073A",
    [theme.breakpoints.down("sm")]: {
        fontSize: 14,
    },
}));

export const ResumeContact = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 24,
    color: "#1F1F1F",
    [theme.breakpoints.down("sm")]: {
        fontSize: 14,
    },
}));

export const ResumeCategory = styled(Typography)(({ theme }) => ({
    fontFamily: `"Raleway", serif`,
    fontWeight: 600,
    fontSize: 32,
    color: "#8C404E",
    [theme.breakpoints.down("sm")]: {
        fontSize: 24,
    },
}));

export const ResumeDesignRole = styled(Typography)(({ theme }) => ({
    fontFamily: `"Raleway", serif`,
    fontWeight: 700,
    fontSize: 24,
    color: "#1E1E1E",
    display: "inline",
    [theme.breakpoints.down("sm")]: {
        fontSize: 18,
    },
}));
export const ResumeDesignLocationTypography = styled(Typography)(({ theme }) => ({
    height: 20,
    fontFamily: `"Raleway", serif`,
    fontWeight: 700,
    fontSize: 20,
    color: "rgba(30, 30, 30, 0.5)",
    marginBottom: 8,
    [theme.breakpoints.down("md")]: {
        fontSize: 14,
        marginBottom: 2,
    },
}));

export const ResumeListTypography = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 300,
    fontSize: 20,
    color: "#1E1E1E",
    [theme.breakpoints.down("md")]: {
        fontSize: 12,
    },
}));

export const Works = [
    // { title: "ShopeyeQ", name: "ShopeyeQ", role: "App Design", image: "/LatestWorkImages/LatestWork1.png", color: "rgba(7, 7, 58, 0.5)" },
    {
        title: "ShopeyeQ",
        name: "ShopeyeQ",
        role: "App Design",
        image: "/LatestWorkImages/ShopeyeQPhone.png",
        circle: "/LatestWorkImages/ShopeyeQCircle.png",
        // color: "rgba(7, 7, 58, 0.5)",
    },
    {
        title: "HUDU",
        name: "HUDU",
        role: "App Design",
        image: "/LatestWorkImages/HuduPhone.png",
        circle: "/LatestWorkImages/HuduCircle.png",
        color: "rgba(47, 99, 254, 0.5)",
    },
    {
        title: "Yat Yap",
        name: "Yat-Yap",
        role: "App Design",
        image: "/LatestWorkImages/YatYapPhone.png",
        color: "linear-gradient(180deg, rgba(4, 120, 130, 0.2) 0%, rgba(4, 120, 130, 0.35) 100%)",
        circle: "/LatestWorkImages/YatYapCircle.png",
    },
    {
        title: "WelfLab",
        name: "WelfLab",
        role: "Landing Page",
        image: "/LatestWorkImages/WelfLaptop.png",
        color: "rgba(209, 132, 243, 0.5)",
        circle: "/LatestWorkImages/WelfCircle.png",
    },
    {
        title: "AppBaker",
        name: "AppBaker",
        role: "Landing Page",
        image: "/LatestWorkImages/AppBakerLaptop.png",
        color: "rgba(78, 114, 142, 0.5)",
        circle: "/LatestWorkImages/AppBakerCircle.png",
    },
    {
        title: "Apsy",
        name: "Apsy",
        role: "UX research / Design",
        image: "/LatestWorkImages/ApsyLaptop.png",
        color: "rgba(29, 114, 226, 0.5)",
        circle: "/LatestWorkImages/ApsyCircle.png",
    },
];

export const Adventure = [
    {
        company: "APSY",
        role: "Product Owner",
        location: "U.S.A.|Oct 2021 - Present",
        list: [
            "Accelerated from UI/UX designer to Product Owner within six months",
            "Orchestrated communication with global clients, overseeing the entire design process remotely",
            "Efficiently managed customer onboarding, cultivating and sustaining 10+ ongoing customer relationships",
            "Spearheaded 10 research projects, presenting actionable recommendations to clients, designers, and engineers",
            "Executed comprehensive user research, including competitive analysis, user flow, interviews, and style guide development",
            "Led the UI design process, incorporating client feedback, coordinating with the development team, and ensuring successful product launches on the app store",
        ],
    },
    {
        company: "WELF",
        role: "Designer",
        location: "G.E.R.|Feb 2022 - Nov 2024",
        list: [
            "Key contributor to the rebranding of Welf and development of main landing pages",
            "Headed a dashboard project for image recognition-based retail execution and tracking services, enhancing operational efficiency for grocery retailers and suppliers",
            "Developed comprehensive style guides and collaborated closely with developers to deliver outstanding design solutions",
            "Proficient in high-performance mobile and web application development, with expertise in AI and AR-focused projects",
        ],
    },
    {
        company: "Hotelian",
        role: "Designer",
        location: "U.A.E.|Mar 2019 - Sep 2021",
        list: [
            "Redesigned the company's website and developed a tailored app for their existing client base",
            "Wore multiple hats in a startup environment, gaining diverse insights into UI/UX",
            "Conducted heuristic evaluation and comparative analysis of major competitors in the travel industry",
            "Utilized website analytics to offer valuable insights into competitors' current business state and viability",
            "Spearheaded the redesign of the onboarding experience and landing page layout",
            "Produced Hi-Fi user flows, site maps, personas, and research documents for the company CEO",
            "Created the new UI design and collaborated with the engineering team for full development",
        ],
    },
];
export const Skills = [
    {
        title: "Research",
        list: [
            "Qualitative Research",
            "Competitive Analysis",
            "User Interviews",
            "Literature Reviews",
            "Card Sorting",
            "Evaluative Research",
            "Creating Surveys",
            "Rapid Research",
        ],
    },
    {
        title: "Testing And Evaluation",
        list: ["Usability Testing", "Remote User Testing", "Heuristic Evaluations", "A/B Testing"],
    },
    {
        title: "Tools",
        list: ["Adobe XD", "Figma", "Sketch", "InVision", "Zeplin", "Axure RP"],
    },
    {
        title: "Visualisation",
        list: ["Spline", "Photoshop"],
    },
    {
        title: "Language",
        list: ["IELTS = 8.5", "Persian"],
    },
];

export const WorkDetailContainer = styled(Stack)(({ theme, prop }) => ({
    backgroundColor: prop,
    maxWidth: "100%",
    // height: 832,
    height: "100%",
    padding: "80px !important",
    [theme.breakpoints.down("md")]: {
        padding: "30px !important",
    },
    zIndex: -1,
}));

export const WorkDetailLandingBox = styled(Stack)(({ theme }) => ({
    width: 784,
    gap: 72,
    display: "flex",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    flexWrap: "wrap",
    [theme.breakpoints.down("lg")]: {
        gap: 62,
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        gap: 52,
        width: "100%",
    },
}));

export const WorkDetailLandingHeaderText = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 46,
    color: "white",
    lineHeight: "64.8px",
    [theme.breakpoints.down("lg")]: {
        fontSize: 35,
        lineHeight: "48.4px",
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: 32,
        lineHeight: "42.4px",
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 26,
        lineHeight: "36.4px",
        width: "100%",
    },
}));

export const WorkDetailLandingHeaderSubText = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 20,
    color: "#EEF2FF",
    [theme.breakpoints.down("lg")]: {
        fontSize: 18,
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: 16,
        lineHeight: "28.4px",
        // width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: "24.4px",
    },
}));

export const DetailsTypography = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 30,
    lineHeight: " 39px",
    width: "100%",
    color: "#1F1F1F",
    [theme.breakpoints.down("md")]: {
        fontSize: 20,
        lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: "20px",
    },
}));
export const SubDetailsTypography = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "26px",
    color: "#111111",
    [theme.breakpoints.down("md")]: {
        fontSize: 15,
        lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 13,
        lineHeight: "20px",
        fontWeight: 400,
    },
}));
export const BoldSubDetailsTypography = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "26px",
    color: "#111111",
    [theme.breakpoints.down("md")]: {
        fontSize: 15,
        lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 13,
        lineHeight: "20px",
    },
}));

export const WorkDetailPercentages = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 72,
    textAlign: "center",
    color: "#3950FF",
    // width: 280,
    height: 79,
    [theme.breakpoints.between("md", "lg")]: {
        fontSize: 62,
    },
    [theme.breakpoints.down("md")]: {
        height: 59,
        fontSize: 42,
    },
}));
export const WorkDetailSubTextPercentages = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    lineHeight: "22.4px",
    color: "#111111",
    // width: 280,
    // width: "100%",
    height: 22,
    textAlign: "center",
    [theme.breakpoints.between("md", "lg")]: {
        fontSize: 14,
    },
    [theme.breakpoints.down("md")]: {
        height: 18,
        fontSize: 12,
    },
}));

export const Percentages = [
    { text: "Inefficiency in Sales Activities", number: "70%" },
    { text: "Data Accuracy Issues", number: "40%" },
    { text: "Lack of Real-Time Sales Visibility", number: "72%" },
    { text: "Excessive Time Spent on Travel", number: "35%" },
];

export const SurveyPercentages = [
    { text: "Find reporting tasks most time-consuming", number: "63%" },
    { text: "Satisfaction with Current Apps in the Market ", number: "42%" },
    { text: "of users find real-time data access crucial", number: "85%" },
];

export const TableRowText = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 18,
    color: "white",
    lineHeight: "23.4px",
    textAlign: "center",
}));

export const TableHeaderText = styled(Typography)(({ theme, prop = "black" }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 24,
    color: prop,
    lineHeight: "31.2px",
    textAlign: "center",
}));

export const TableColumnText = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 500,
    fontSize: 20,
    color: "white",
    lineHeight: "26px",
}));

export const PrototypeButtonText = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 900,
    fontSize: 24,
    color: "white",
    lineHeight: "24px",
    textTransform: "none",
    textUnderlineOffset: "8px",
    textDecoration: "2px white underline",
    [theme.breakpoints.down("md")]: {
        fontSize: 14,
        fontWeight: 700,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 10,
        fontWeight: 600,
    },
}));
