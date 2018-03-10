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
  
 // componentDidMount() {
 //   axios.get('/api/players')
 //     .then( res => {
 //       this.setState({ player: res.data, headers: res.data})
 //     }).catch( err => {
 //       console.log(err)
 //     })
 // }

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

  setName = () => {
    console.log("did it");
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
              <Button onClick={this.setName}>
                Add Name
              </Button>
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
