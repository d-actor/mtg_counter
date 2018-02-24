const players = ( state = [], action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return [action.player, ...state]
    case 'GET_PLAYER':
      return action.player
    case 'INCREMENT':
      return action.player
    case 'DECREMENT':
      return action.player
    case 'DELETE':
      return [action.player, ...state]
    case 'GET_PLAYERS':
      return action.player
    default:
      return state;
  }
}

export default players;
