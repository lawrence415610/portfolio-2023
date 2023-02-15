import "./ContactPage.scss";
import "../UI/Description";
import TitleBig from "../UI/TitleBig";
import TitleSmall from "../UI/TitleSmall";
import Container from "../layout/Container";
import ContainerLeft from "../layout/ContainerLeft";
import ContainerRight from "../layout/ContainerRight";

const ContactPage = () => {
  return (
    <section className="section--contact">
      <Container>
        <ContainerLeft>
          <TitleBig>Contact</TitleBig>
          <TitleSmall>My contact details</TitleSmall>
        </ContainerLeft>
        <ContainerRight img="/4.jpg"></ContainerRight>
      </Container>
    </section>
  );
};

export default ContactPage;
