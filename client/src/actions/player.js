import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getPlayers = () => {
  return(dispatch) => {
    axios.get('/api/players')
      .then( res => {
        dispatch({ type: 'GET_PLAYERS', players: res.data, headers: res.headers  })
      }).catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(serFlash('Failed to get players', 'red'));  
    });
  }
}

export const addPlayer = (player) => {
  return(dispatch) => {
    axios.post('/api/players', { player })
      .then( res => {
        dispatch({ type: 'ADD_PLAYER', player: res.data, headers: res.headers )}
      }).catch( err => {
        dispatch(setFlash('Failed to add player', 'red'));
        dispatch(setHeaders(err.headers));
      });
  }
}

export const getPlayer = (id) => {
  return(dispatch) => {
    axios.get(`/api/players/${id}`)
      .then( res => {
        dispatch({ type: 'GET_PLAYER', player: res.data, headers: res.headers  })
      }).catch( err => {
        dispatch(setFlash('Failed to get player', 'red'))
        dispatch(setHeaders(err.headers))
      });
  }
}

export const increment = (player, id) => {
  return(dispatch) => {
    axios.post(`/api/players/${id}`, { player })
      .then( res => {
        dispatch({ type: 'INCREMENT', player: res.data, headers: res.headers  })
      }).catch( err => {
        dispatch(setFlash('Failed to increment', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

export const decrement = (hp, id) => {
  return(dispatch) => {
    axios.post(`/api/players/${id}`, { player })
      .then( res => {
        dispatch({ type: 'DECREMENT', player: res.data, headers: res.headers  })
      }).catch( err => {
        dispatch(setFlash('Failed to decrement', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}

export const reset = (id) => {
  // TODO  -- this  
}

export const deletePlayer = (id) => {
  return(dispatch) => {
    axios.delete(`/api/players/${id}`)
      .then( res => {  
        dispatch({ type: 'DELETE', player: res.data, headers: res.headers  })
      }).catch( err => {
        dispatch(setFlash('Failed to delete player', 'red'));
        dispatch(setHeaders(err.headers));
    });
  }
}


