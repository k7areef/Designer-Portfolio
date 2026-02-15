/**
 * @typedef {Object} SectionHeaderProps
 * @prop {string} title
 * @prop {string} description
 */

/**
 * @param {SectionHeaderProps} props
 */

function SectionHeader({ title, description }) {
    return (
        <div className="section-header mb-5 md:mb-10">
            <div className="container flex flex-col items-center justify-center gap-3">
                <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{title}</h2>
                {description && <p className="md:mx-auto md:max-w-250">{description}</p>}
            </div>
        </div>
    )
}

export default SectionHeader;