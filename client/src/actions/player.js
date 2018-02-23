import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

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

export const increment = (hp, id) => {
  return(dispatch) => {
    // TODO -- this
    axios.post(`/api/players/${id}`)
  }
}

export const decrement = (hp, id) => {
  // ALSO TODO -- this
}

export const reset = (id) => {
  // TODO this -- too
}
