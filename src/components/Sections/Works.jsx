import SectionHeader from "./common/SectionHeader";
import data from "@data/works.json";

function Works() {

    const { title, description } = data;

    return (
        <section className="works-section py-5 md:py-10" id="works">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Works;