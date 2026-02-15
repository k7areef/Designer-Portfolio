import SectionHeader from "./common/SectionHeader";
import data from "@data/skills.json";

function Skills() {

    const { title, description } = data;

    return (
        <section className="skills-section py-5 md:py-10" id="skills">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Skills;