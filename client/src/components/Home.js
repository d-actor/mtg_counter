import React, { Component } from 'react';
import { 
  Header,
  Form,
  Input,
  Image,
  Button,
  Card,
  Container,
} from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { players: [], loaded: false }
  
  componentDidMount() {
    axios.get('/api/player')
      .then( res => {
        console.log(res.data)
      })
  }

  addPlayer = () => {
    console.log('do it')
  }

  displayPlayers = () => {
    // TODO
  }

  render() {
    return (
      <Container>
        <Header style={styles.header} as='h1' textAlign='center'>
          MTG Counter
          <br />
          <Button color='green' textAlign='center' onClick={this.addPlayer}>
            <Header style={styles.header} as='h2' textAlign='center'>Add Player</Header>
          </Button>
        </Header>
        <Card.Group>
          { this.displayPlayers }
        </Card.Group>
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
