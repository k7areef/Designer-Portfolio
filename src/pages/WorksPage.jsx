import OurWorks from "@components/Sections/OurWorks";
import Overview from "@components/Sections/Overview";

function WorksPage() {
    return (
        <div className="works-page">
            <Overview page="works" />
            <OurWorks />
        </div>
    )
}

export default WorksPage;