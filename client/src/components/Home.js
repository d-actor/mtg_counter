import React, { Component } from 'react';
import { 
  Header,
  Button,
  Card,
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { players: [], loaded: false }
  
  componentDidMount() {
    axios.get('/api/players')
    .then( res => {
      this.setState({ players: res.data, headers: res.headers})
    }).catch( err => {
      console.log(err)
    })
  }
    
 // increment = () => {
    // let count = this.state.players.counter1 += 1
    // this.setState({ counter1: count })
 // }
  
 // decrement = () => {
    // let count = this.state.counters.counter1 -= 1
    // this.setState({ counter1: count })
 // }

  addPlayer = () => {
    console.log('do it')
  }

 // increment = (hp) => {
  //  hp += 1
  //}
  
 // decrement = (hp) => {
 //   hp -= 1 
 // }

  displayPlayers = () => {
    return this.state.players.map( player => {
    this.increment = () => {
      let newHp = player.hp + 1
      console.log(newHp)
      this.setState({ hp: newHp })    
    }
    this.decrement = () => {
      player.hp -= 1
      console.log(player.hp)
      this.setState({ hp: player.hp })
    } 
    return(
        <Card key={player.id}>
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
                  <Button color='red' onClick={() => this.decrement()}>-</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button color='green' onClick={() => this.increment()}>+</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    // let counter1 = this.state.counters.counter1
    // let counter2 = this.state.counters.counter2
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
