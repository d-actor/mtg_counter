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
  state = { players: [], counters: {counter1: 20, counter2: 20}, loaded: false }
  
  componentDidMount() {
    axios.get('/api/players')
    .then( res => {
      this.setState({ players: res.data, headers: res.headers})
      console.log(this.state.counters)
      // this.setCounters()
    }).catch( err => {
      console.log(err)
    })
  }
  
  // setCounters = () => {
  //   // creates counters variables in local state for each player
  //   let playerCounters = []
  //   let i = 0
  //   this.state.players.map( player => {
  //     playerCounters.push({hp: 20})
  //     i += 1
  //   })
  //   this.setState({ counters: playerCounters })
  //   console.log(this.state.counters)
  //   console.log(this.state.players)
  // }
    
  increment1 = () => {
    let count = this.state.counters.counter1 += 1
    this.setState({ counter1: count })
  }
  
  decrement1 = () => {
    let count = this.state.counters.counter1 -= 1
    this.setState({ counter1: count })
  }
  
  increment2 = () => {
    let count = this.state.counters.counter2 += 1
    this.setState({ counter2: count })
  }
  
  decrement2 = () => {
    let count = this.state.counters.counter2 -= 1
    this.setState({ counter2: count })
  }

  addPlayer = () => {
    console.log('do it')
  }

  // TODO

  // displayCounter = (player) => {
  //   let counters = this.state.counters;
  //   let counter = counters.player
  //   return(
  //     <Header as='h1'>{counter}</Header>
  //   )
  // }

  // displayPlayers = () => {
  //   return this.state.players.map( player => {
  //     return(
  //       <Card>
  //         <Card.Content>
  //           <Card.Header textAlign='center'>
  //            { player.name }
  //           </Card.Header>
  //           <br />
  //           <Card.Header as='h1' textAlign='center'>
  //             {this.state.counters.counter1}
  //           </Card.Header>
  //           <Grid>
  //             <Grid.Row textAlign='center'>
  //               <Grid.Column width={8}>
  //                 <Button color='red' onClick={decrement(player.id)}>-</Button>
  //               </Grid.Column>
  //               <Grid.Column width={8}>
  //                 <Button color='green' onClick={increment(player.id)}>+</Button>
  //               </Grid.Column>
  //             </Grid.Row>
  //           </Grid>
  //         </Card.Content>
  //       </Card>
  //     )
  //   })
  // }

  render() {
    let counter1 = this.state.counters.counter1
    let counter2 = this.state.counters.counter2
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
            {/* { this.displayPlayers() } */}
            <Card>
              <Card.Content>
                <Card.Header textAlign='center'>
                  Dan
                </Card.Header>
                <br />
                <Card.Header as='h1' textAlign='center'>
                  { counter1 }
                </Card.Header>
                <Grid>
                  <Grid.Row textAlign='center'>
                    <Grid.Column width={8}>
                      <Button color='red' onClick={() => this.decrement1()}>-</Button>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Button color='green' onClick={() => this.increment1()}>+</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header textAlign='center'>
                  Kat
                </Card.Header>
                <br />
                <Card.Header as='h1' textAlign='center'>
                  { counter2 }
                </Card.Header>
                <Grid>
                  <Grid.Row textAlign='center'>
                    <Grid.Column width={8}>
                      <Button color='red' onClick={() => this.decrement2()}>-</Button>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Button color='green' onClick={() => this.increment2()}>+</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
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
