import "./ContactPage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import Container from "../layout/Container";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";
import Description from "../UI/Description";
import Emphasis from "../UI/Emphasis";

const ContactPage = () => {
  return (
    <section className="section--contact">
      <Container>
        <ContainerLeft>
          <TitleBig>Contact Me</TitleBig>
          <Description>
            I am <Emphasis>Sydney</Emphasis> based. I don't need employer's
            sponsorship, as I have already been invited to apply{" "}
            <Emphasis>permanent resident visa</Emphasis>. Currently, I have{" "}
            <Emphasis>full working right</Emphasis> for next next 3 years.
          </Description>
          <TitleSmall>My contact details</TitleSmall>
          <div className="contact-details">
            <div className="contact-details__box">
              <i className="bi bi-phone-vibrate contact-details__icon"></i>
              <span className="contact-details__text">Tel: 0468600207</span>
            </div>

            <div className="contact-details__box">
              <i className="bi bi-envelope-at contact-details__icon"></i>
              <span className="contact-details__text">
                Email: lawrence.liu@yelinliu.com
              </span>
            </div>
          </div>
        </ContainerLeft>
        <ContainerRight img="/4.jpg"></ContainerRight>
      </Container>
    </section>
  );
};

export default ContactPage;
