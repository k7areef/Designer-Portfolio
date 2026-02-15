import HistoryAndTimeline from "@components/Sections/HistoryAndTimeLine";
import Overview from "@components/Sections/Overview";

function AboutPage() {
    return (
        <div className="about-page">
            <Overview />
            <HistoryAndTimeline />
        </div>
    )
}

export default AboutPage;