import React from 'react';
import { 
  Header,
  Form,
  Grid,
  Input,
  Image,
  Button,
  Card,
  Container,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

class Player extends React.Component {
  state = { hp: 20, name: '' }
  
  increment = () => {
    this.setState( (state) => {
      return { hp: state.hp + 1 }
    })  
  }

  decrement = () => {
    this.setState( (state) => {
      return { hp: state.hp - 1 } 
    })
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({ name: e.target.value });
  }
 
  render() {
    let { hp, name } = this.state
    return(
      <Card>
        <Card.Content>
          <Card.Header as='h2' textAlign='center'>
            {
              name === ''
                ?
              <Form onSubmit={this.handleChange}>
                <Form.Input
                  name="name"
                  placeholder="Enter Name"
                />
              </Form>
                :
              name
            }  
          </Card.Header>
          <Card.Header as='h1' textAlign='center'>
            { hp }
          </Card.Header>
          <Grid>
            <Grid.Row textAlign='center'>
              <Grid.Column width={8}>
                <Button color='red' onClick={this.decrement}>-</Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <Button color='green' onClick={this.increment}>+</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
};

export default Player;
