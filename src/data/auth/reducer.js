const initialState = {
  uid: null,
  name: null,
  photo: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...action.userInfo,
      }
    default:
      return state
  }
}