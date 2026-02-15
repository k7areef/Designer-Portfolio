import ContactForm from "@components/Sections/ContactForm";
import Faqs from "@components/Sections/Faqs";
import Overview from "@components/Sections/Overview";
import SocialLinks from "@components/Sections/SocialLinks";

function ContactPage() {
    return (
        <div className="contact-page">
            <Overview page="contact" />
            <ContactForm />
            <SocialLinks />
            <Faqs />
        </div>
    )
}

export default ContactPage;