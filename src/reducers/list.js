const initialState = {
  current: [
  ],
  storageData: [
  ],
  result: [
  ]
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'GET_CURRENT':
      return { ...state, current: action.result }
    case 'REFRESH':
      return { ...state, result: action.result }
    case 'ADD':
      return { ...state, storageData: action.result }
    case 'REMOVE':
      return { ...state, storageData: action.result }
    default:
      return state;
  }
}
