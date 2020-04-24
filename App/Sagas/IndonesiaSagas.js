import { call, put } from 'redux-saga/effects'
import IndonesiaActions from '../Redux/IndonesiaRedux'
import { ErrorHandler } from '../Lib/ErrorHandler'

export function* getSummary(api, action) {
  const { data } = action
  const response = yield call(api.getSummary, data)

  if (response.ok) {
    yield put(IndonesiaActions.getSummarySuccess(response.data))  
  } else {
    ErrorHandler(response)
    yield put(IndonesiaActions.getSummaryFailed(response))
  }
}