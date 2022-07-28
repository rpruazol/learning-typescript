import React from "react"
import HornedComponent from "./HornedComponent"


type MyProps = {
  hornedArray: {
    title: string;
    description: string
    image_url: string
  };
}

export default class Main extends React.Component<MyProps> {

  render() {
    return(
      <HornedComponent hornedArray={this.props.hornedArray} />
    )
  }
}