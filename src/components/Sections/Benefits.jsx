import SectionHeader from "./common/SectionHeader";
import data from "@data/benefits.json";

function Benefits() {

    const { title, description } = data;

    return (
        <section className="benefits-section py-5 md:py-10" id="benefits">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Benefits;