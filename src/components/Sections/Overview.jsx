import data from "@data/overviews.json";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @typedef {Object} OverviewProps
 * @prop {'works' | 'contact'} page
 */

/**
 * @param {OverviewProps} props
 */

function Overview({ page = "works" }) {

    const { title, description, items } = data[page];

    return (
        <section className="overview-section py-5 md:py-10" id="overview">
            <div className="container">
                <div className="content-wrapper bg-white flex items-center justify-center flex-col p-5 md:p-10 rounded-2xl text-center">
                    <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-2">{title}</h1>
                    <p>{description}</p>
                    {/* Items */}
                    {
                        (items && items.length > 0) && (
                            <ul className="flex items-center justify-center gap-3 flex-wrap mt-5">
                                {
                                    items.map((item, index) => (<li key={index} className="flex items-center justify-center gap-2 p-2 rounded-md border border-soft-peach-90 max-sm:w-full">
                                        <FontAwesomeIcon icon={faCheck} className="text-purple-50" />
                                        <span className="text-grey-20 font-medium">{item.name}</span>
                                    </li>))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Overview;