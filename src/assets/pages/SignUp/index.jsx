import { Component } from "react";

import Logo from "../../components/Logo";
import TextualContent from "../../components/TextualContent";
import DescriptiveText from "../../components/DescriptiveText";
import Container from "../../components/Container";
import SignupForm from "../../components/SignupForm";
import Formtitle from "../../components/FormTitle";

import "./style.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <div className="left-side">
          <Container>
            <Logo logoName={"Watches"} className={"small-logo"} />
            <DescriptiveText text={<TextualContent />} name={"Hadeel Halliq"} />
          </Container>
        </div>
        <div className="rightSide">
          <Container>
            <Formtitle
              header={"Register Individual Account"}
              paragraph={
                "In order to choose what is best for you, your details are important"
              }
            />
            <SignupForm />
          </Container>
        </div>
      </div>
    );
  }
}
