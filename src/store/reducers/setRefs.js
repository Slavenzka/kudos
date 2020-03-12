import { CLEAR_SECTIONS_REFS, SET_SECTIONS_REFS } from 'store/actions/actionTypes'

const initialState = {
  catalog: null,
  about: null,
  manufacturers: null,
  contacts: null
}

const setRefs = (state, action) => {
  return {
    ...action.payload
  }
}

const clearRefs = (state, action) => {
  return {
    catalog: null,
    about: null,
    manufacturers: null,
    contacts: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTIONS_REFS: return setRefs(state, action)
    case CLEAR_SECTIONS_REFS: return clearRefs(state, action)
    default: return state
  }
}

export default reducer
