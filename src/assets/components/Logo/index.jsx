import { Component } from "react";
import { GiWatch } from "react-icons/gi";
import { H2 } from "../Typography";
import "./style.css";

export default class Logo extends Component {
  render() {
    const { logoName, className } = this.props;
    return (
      <>
        {className ? (
          <div className={className}>
            <GiWatch />
            <H2>{logoName}</H2>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
