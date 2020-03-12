import { CLEAR_SECTIONS_REFS, SET_SECTIONS_REFS } from 'store/actions/actionTypes'

export const setSectionRefs = refsObj => {
  return {
    type: SET_SECTIONS_REFS,
    payload: {
      ...refsObj
    }
  }
}

export const clearSectionRefs = () => {
  return {
    type: CLEAR_SECTIONS_REFS,
  }
}
