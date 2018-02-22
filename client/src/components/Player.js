import React from 'react';
import { 
  Header,
  Form,
  Input,
  Image,
  Button,
  Card,
  Container,
  Segment,
} from 'semantic-ui-react';

Player = (player) => {
  state = { hp: player.hp, name: player.name }
  return(
    <Card>
      <Card.Content>
        <Card.Header textAlign='center'>
          { player.name }
        </Card.Header>
        <br />
        <Card.Header as='h1' textAlign='center'>
          {this.state.counters.counter1}
        </Card.Header>
        <Grid>
          <Grid.Row textAlign='center'>
            <Grid.Column width={8}>
              <Button color='red' onClick={decrement(player.id)}>-</Button>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button color='green' onClick={increment(player.id)}>+</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default Player;
