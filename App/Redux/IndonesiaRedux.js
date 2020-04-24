import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getSummaryRequest: ['data'],
  getSummarySuccess: ['data'],
  getSummaryFailed: ['error'],
})

export const IndonesiaTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  summary: { data: null, fetching: false, error: null }
})

export const getSummaryRequest = (state, { data }) =>
  state.merge({ ...state, summary: { ...state.summary, fetching: true, error: null } })
export const getSummarySuccess = (state, { data }) =>
  state.merge({ ...state, summary: { ...state.summary, data, fetching: false, error: null } })
export const getSummaryFailed = (state, { error }) =>
  state.merge({ ...state, summary: { ...state.summary, fetching: false, error: error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SUMMARY_REQUEST]: getSummaryRequest,
  [Types.GET_SUMMARY_SUCCESS]: getSummarySuccess,
  [Types.GET_SUMMARY_FAILED]: getSummaryFailed,
})
