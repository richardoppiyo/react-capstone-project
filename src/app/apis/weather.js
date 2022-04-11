const ADD = 'reactcapstone/apis/ADD';

const init = [];

export default function myReducer(state = init, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    default:
      return state;
  }
}
