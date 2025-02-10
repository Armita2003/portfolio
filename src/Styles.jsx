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

export const FooterButtonText = styled(Typography)(({ theme }) => ({
    height: 33,
    fontFamily: ` var(--font-pphatton), serif`,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "33.22px",
    [theme.breakpoints.between("sm", "md")]: {
        fontWeight: 500,
        fontSize: 18,
    },
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

export const WorkDetailLandingHeaderText = styled(Typography)(({ theme, color }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 700,
    fontSize: 46,
    color: color,
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

export const WorkDetailLandingHeaderSubText = styled(Typography)(({ theme, color }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 400,
    fontSize: 20,
    color: color,
    [theme.breakpoints.down("lg")]: {
        fontSize: 18,
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: 16,
        lineHeight: "28.4px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: "22.4px",
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
export const ListTypography = styled(Typography)(({ theme }) => ({
    fontFamily: `'Satoshi', sans-serif`,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "26px",
    color: "#1F1F1F",
    paddingBottom: 20,
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

export const HuduPercentages = [
    { text: "abandoned the project-posting", number: "45%" },
    { text: "struggled to find key features", number: "60%" },
    { text: "left profiles incomplete", number: "40%" },
    { text: "drop in daily active users in six months", number: "30%" },
];

export const YachtOwnersPercentages = [
    { text: "struggle with maintaining a consistent, well-trained crew", number: "68%" },
    { text: "report challenges with crew transitions and onboarding", number: "72%" },
    { text: "spend excessive time on manual crew management tasks", number: "25%" },
];

export const CrewMembersPercentages = [
    { text: "of crew members are dissatisfied with traditional job management systems", number: "40%" },
    { text: "of crew members feel disconnected from the yachting community", number: "33%" },
    { text: "of crew members report lost job opportunities due to scheduling conflicts", number: "20%" },
];

export const ProblemStatementPercentages = [
    { text: "Didn't create an app", number: "55%" },
    { text: "Were not published in Apsy", number: "44%" },
    { text: "Published to the stores", number: "0.6%" },
];

export const FuturePlansList = [
    "Continuously gather user feedback to identify emerging needs and pain points.",
    "Explore the integration of advanced AI-driven support features, such as a chatbot for instant issue resolution.",
    "Expand the library of pre-designed model types to cater to a broader range of user needs and industries.",
    "Further personalize email communication by leveraging behavioral analytics to deliver even more targeted and impactful updates.",
    "Conduct regular usability testing to ensure the platform evolves in line with user expectations and industry trends.",
];

export const KeyInsightsList = [
    "Users spent excessive time navigating the onboarding screen, indicating a lack of clear guidance.",
    "Drop-offs consistently occurred at points where users were required to make decisions without sufficient context or examples.",
];

export const UserQuotesList = [
    "“The platform looks promising but feels overwhelming without clear instructions.”",
    "“I didn’t know how to preview my app while building it.”",
];

export const SurveyFeedbackAnalysisList = [
    "49% of respondents said they didn’t understand the next steps after naming their app.",
    "35% felt the onboarding process lacked sufficient explanation of features.",
    "28% wanted more visual or video-based guides.",
];

export const KeyBehavioralPatternsList = [
    "High drop-off rates: 49% of users left the process before reaching the “app name” stage.",
    "Heat-maps: Showed repeated clicks on non-interactive elements, indicating unclear UI design.",
    "Session replays: Revealed users frequently revisiting the same steps, suggesting uncertainty about completing tasks.",
];

export const MeetingInsightsList = [
    "Purpose of the Landing Page: Showcase AppBaker’s expertise in delivering digital products, ranging from MVP development to full-scale app solutions, across various industries including tech, healthcare, and e-commerce.",
    "Target Audience: Businesses seeking to develop custom applications, including startups and enterprises in diverse sectors.",
    "KPIs: Increase inbound inquiries, enhance brand credibility, boost client engagement, and elevate lead conversion rates.",
    "Business Objectives: Position AppBaker as a leader in app development, drive project acquisition, and highlight their expertise in delivering secure, high-quality, and scalable digital solutions.",
];

export const SeamlessInformationArchitectureList = [
    "Technologies: Categorized into foundational tech stacks (Mobile, Backend, Big Data) and advanced capabilities (AI, AR, Cloud), these sections align technical expertise with specific industries like Healthcare, Media, and Smart Cities.",
    "Services: Featuring UI/UX Design, DevOps, Product Development, and more, this pillar emphasizes AppBaker’s ability to provide tailored, end-to-end solutions for diverse business needs.",
    "Supporting Sections: Additional areas, including Projects, Insights, Careers, and About Us, offer users a deeper understanding of AppBaker’s expertise, culture, and thought leadership.",
];

export const ImprovingUsabilityList = [
    "Advanced Filtering Options: Introduce enhanced filtering to refine job searches based on yacht type, location, duration, pay, or specific crew requirements. This ensures users quickly find opportunities that match their preferences.",
    "Measuring Platform Value: Develop tools to track application success rates, response times, and interview outcomes. For yacht owners, analyze metrics such as time saved in recruitment and quality of hires. This helps users understand the tangible value YATYAP provides.",
    "Enhanced Data Visualization: Offer dashboards for both crew and yacht owners, displaying insights like job history, average hire success, or career progress to aid in better decision-making.",
    "Personalized Recommendations: Implement algorithms tailored to user profiles, previous job activity, and preferences, enabling personalized job suggestions for crew and ideal candidate recommendations for yacht owners.",
];

export const HybridCardSortingList = [
    "Solutions: Organized by industries—Retail, Banking, Social, and E-commerce. Clicking on each reveals relevant projects, which are further clickable for detailed pages.",
    "Expertise: Grouped by core capabilities—Data Science, Data Engineering, Custom Software, Enterprise Solutions, and Big Data, each displaying use cases.",
    "Services: Comprehensive service offerings, including Management IT Counseling, Requirements Engineering, Project Audit, Custom Software Development, Solution Integration, Infrastructure Management, Maintenance and Back Office, and Data Engineering.",
    "Company: Simplified into About Us and Career pages.",
    "A “Get in Touch” button was added as a separate, prominent call-to-action for accessibility.",
];

export const CompetitiveAnalysisList = [
    "Gain insights into digital product trends",
    "Identify the target market and competitors",
    "Understand how businesses discover and engage with digital solutions",
    "Evaluate common pain points in digital product development",
];

export const UserInterviewList = [
    "Identifying key factors that motivate users to choose HUDU for their job postings or service browsing",
    "Discovering pain points users face when posting jobs, browsing through listings, or managing profiles",
    "Understanding what makes a seamless, efficient user experience on HUDU",
    "Evaluating competitors’ strengths and weaknesses from the users' perspective, and how HUDU could differentiate itself",
];

export const HomeRedesignOutcome = [
    "Enlarged Images significantly enhanced visual engagement and made the homepage more appealing.",
    "Displayed Location Data was clear and helped users quickly find projects relevant to their geographic preferences.",
    "Map Feature was intuitive and highly appreciated, enabling users to explore projects based on location seamlessly.",
    "Filter and Sort Options were effective in reducing the time taken to locate desired projects, improving overall navigation efficiency.",
];

export const ProjectRedesignOutcome = [
    "Breaking the process into five distinct steps reduced user overwhelm and improved clarity.",
    "Contextual guidance at each step made the process more intuitive and less intimidating.",
    "Redesigned input fields improved usability and streamlined the user flow.",
    "The dedicated questions section empowered Listers to make informed decisions, ensuring better Doer matches.",
];

export const ProfileRedesignOutcome = [
    "The new layout, with clearly defined sections, made the profile easier to navigate and visually appealing.",
    "Relevant user information was highlighted, reducing the need for excessive clicking and improving access to key details.",
    "A prominent banner encouraged background check upgrades, resulting in a 12% increase in upgrades.",
    "The breakdown of information into sections reduced friction, enabling users to find the data they needed quickly and efficiently.",
];

export const ReflectionsList = [
    "Adoption of New Features: While the introduction of features like the map view and the redesigned project listing flow received positive feedback, monitoring long-term engagement is essential to ensure users continue to leverage these tools effectively. For instance, ensuring that users actively utilize the map view and sorting options can validate the redesign’s success.",
    "Profile Interactions: The new profile design aims to make information accessible and visually engaging. However, further analysis is needed to determine how these changes influence decision-making, such as whether the banner for background checks encourages genuine trust-building or simply drives financial gains.",
    "User Behavior Trends: Understanding how users navigate and interact with the app in the long term is crucial. For example, tracking which features see consistent engagement and whether any areas of the app remain underutilized can guide iterative updates.",
    "Diverse User Needs: As HUDU continues to grow, considering the diverse needs of users across regions, professions, and technical proficiency levels will be key. Ensuring inclusivity in design and functionality will help maintain broad user satisfaction.",
];

export const SurveyPercentages = [
    { text: "Find reporting tasks most time-consuming", number: "63%" },
    { text: "satisfaction with current apps in the Market ", number: "42%" },
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
