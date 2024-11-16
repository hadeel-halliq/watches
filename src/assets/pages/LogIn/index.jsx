import  { Component } from 'react'
import { GiPocketWatch } from "react-icons/gi";

import Container from '../../components/Container'
import Logo from '../../components/Logo'
import DescriptiveText from '../../components/DescriptiveText'
import TextualContent from '../../components/TextualContent'
import Formtitle from '../../components/FormTitle';
import LoginForm from '../../components/LoginForm';

import './style.css'

export default class LogIn extends Component {
  render() {
    const {login} = this.props
    return (
      <div className='log-in'>
        <div className='login-left-side'>
          <Container>
            <Logo logoName={"Watches"} className={"big-logo"}/>
            <DescriptiveText text={<TextualContent/>} name={"Hadeel Halliq"} clockImage={<GiPocketWatch />}/>
          </Container>
        </div>
        <div className='login-right-side'>
          <Container>
          <Formtitle
              header={"Join to Us"}
              paragraph={
                "In order to choose what is best for you, your details are important"
              }
            />
            <LoginForm login={login}/>
          </Container>
        </div>
      </div>
    )
  }
}
