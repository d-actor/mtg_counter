import React, { Component } from 'react';
import { 
  Header,
  Button,
  Card,
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';
 // import Player from './Player';
import axios from 'axios';
import Player from './Player';

class Home extends Component {
  state = { players: [1, 1] };
  

  displayPlayers = () => {
    const { players } = this.state;
    return players.map( player => {
      return(
        <Player />
      )
    });
  }

  addPlayer = () => {
    this.setState( (state) => {
      return { players: state.players + 1 }
    });
    
   this.displayPlayers;
  }

  render() {
    return (
      <Container>
        <Header style={styles.header} as='h1' textAlign='center'>
          MTG Counter
          <br />
          <Button color='green' onClick={this.addPlayer}>
            <Header style={styles.header} as='h2' textAlign='center'>Add Player</Header>
          </Button>
        </Header>
        <Segment basic>
          <Card.Group stackable itemsPerRow={2}>
            { this.displayPlayers }
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#FFF'
  }
}

export default Home;
