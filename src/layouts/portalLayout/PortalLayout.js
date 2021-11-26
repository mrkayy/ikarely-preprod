import { Component } from "react";
import ReactDom from "react-dom";

const portal = document.getElementById("portal");

export default class PortalLayout extends Component {
  constructor() {
    super();
    this.element = document.createElement("div");
  }

  componentDidMount = () => {
    portal.appendChild(this.element);
  };

  componentWillUnmount = () => {
    portal.removeChild(this.element);
  };

  render() {
    const { children } = this.props;
    return ReactDom.createPortal(children, this.element);
  }
}
