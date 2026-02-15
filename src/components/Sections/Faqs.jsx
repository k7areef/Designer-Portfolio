import SectionHeader from "./common/SectionHeader";
import data from "@data/faqs.json";

function Faqs() {

    const { title, description } = data;

    return (
        <section className="faqs-section py-5 md:py-10" id="faqs">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Faqs;