// List of possible action types - which actions could happen
// in bounds of counter's functionality
export const COUNTER_ACTIONS = {
  increment: 'COUNTER/INCREMENT',
  decrement: 'COUNTER/DECREMENT',
  incrementTwo: 'COUNTER/INCREMENT_TWO'
  addSomething: 'COUNTER/ADD_SOMETHING'

}


// Action creators
export const incrementAction = () => {
  return { type: COUNTER_ACTIONS.increment }
}

export const decrementAction = () => {
  return { type: COUNTER_ACTIONS.decrement }
}

export const incrementTwoAction = () => {
  return { type: COUNTER_ACTIONS.incrementTwo }
}

export const addSomethingAction = ( num ) => {
  return {
    type: COUNTER_ACTIONS.addSomething,
    payload: num
  }
}

