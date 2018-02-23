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

class Player extends React.Component {
  state = { player: {} }
 
  increment = () => {
    
    //  this.setState({ player.hp += 1 })
  }

  decrement = () => {
    this.state.player.hp -= 1
  //  this.setState({ player.hp -= 1 })
  }
 
  render() {
    let player = this.state.player
    return(
      <Card>
        <Card.Content>
          <Card.Header textAlign='center'>
            { player.name }
          </Card.Header>
          <br />
          <Card.Header as='h1' textAlign='center'>
            { player.hp }
          </Card.Header>
          <Grid>
            <Grid.Row textAlign='center'>
              <Grid.Column width={8}>
                <Button color='red' onClick={() => player.hp -= 1}>-</Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <Button color='green' onClick={() => player.hp += 1}>+</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
};

export default Player;
