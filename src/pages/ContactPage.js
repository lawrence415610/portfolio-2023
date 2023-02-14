import "./ContactPage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="contact__left">
        <TitleBig>Contact</TitleBig>
        <TitleSmall>My contact details</TitleSmall>
      </div>
      <div className="contact__right"></div>
    </section>
  );
};

export default ContactPage;
