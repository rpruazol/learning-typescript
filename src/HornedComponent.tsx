import React from 'react';
import Card from 'react-bootstrap/Card'

type MyProps = {
  hornedArray: {
    title: string;
    description: string;
    image_url: string;
  };
}

export default class HornedComponent extends React.Component<MyProps> {

  render() {
    return (
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Header>{this.props.hornedArray.title}</Card.Header>
        <Card.Body>
          <Card.Img src={this.props.hornedArray.image_url} />
          <Card.Text>
            {this.props.hornedArray.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">❤️</Card.Footer>
      </Card>
    )
  }
}