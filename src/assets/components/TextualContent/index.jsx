import { Component } from "react";
import { Body } from "../Typography";
import { SiComma } from "react-icons/si";

export default class TextualContent extends Component {
  render() {
    return (
      <Body>
        <SiComma />
        <SiComma />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
        delectus ducimus, ab, explicabo nulla non facilis maxime voluptates
        inventore nisi magni necessitatibus provident consectetur. Consectetur
        eos saepe recusandae reprehenderit?
      </Body>
    );
  }
}
