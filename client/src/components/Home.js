import React, { Component } from 'react';
import { 
  Header,
  Form,
  Input,
  Image,
  Button,
  Card,
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { players: [], counters: { counter1: 20, counter2: 20 }, loaded: false }
  
  componentDidMount() {
    axios.get('/api/players')
    .then( res => {
      this.setState({ players: res.data, headers: res.headers})
      this.setCounters()
    }).catch( err => {
      console.log(err)
    })
  }
  
  setCounters = () => {
    // creates counters variables in local state for each player
    let playerCounters = []
    let i = 0
    this.state.players.map( player => {
      playerCounters.push({hp: 20})
      i += 1
    })
    this.setState({ counters: playerCounters })
    console.log(this.state.counters)
    console.log(this.state.players)
  }
    
  increment = (counter) => {
    counter += 1
  }

  decrement = (counter) => {
    counter -= 1
  }

  addPlayer = () => {
    console.log('do it')
  }

  displayCounter = () => {
    // TODO
  }

  displayPlayers = () => {
    return this.state.players.map( player => {
      return(
        <Card>
          <Card.Content>
            <Card.Header textAlign='center'>
             { player.name }
            </Card.Header>
            <Grid>
              <Grid.Row textAlign='center'>
                <Grid.Row>
                  { this.displayCounter() }
                </Grid.Row>
                <Grid.Column width={8}>
                  <Button color='red' onClick={this.decrement()}>-</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color='green' onClick={this.increment()}>+</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      )
    })
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
        <Segment basic>
          <Card.Group stackable itemsPerRow={2}>
            { this.displayPlayers() }
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
