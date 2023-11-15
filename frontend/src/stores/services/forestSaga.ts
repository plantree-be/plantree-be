import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'
import { FetchUserDataResponse } from '@/types/UserType'
import { forestGetApi, treeDetail, treeList } from '@/apis'
import {
  getForestData,
  getTreeDetailData,
  getTreesData,
  saveForestData,
  saveTreeDetailData,
  saveTreesData,
} from '@/stores/features/forestSlice'

function* getForestSaga(): Generator<
  CallEffect | PutEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  const response: AxiosResponse<any> = yield call(forestGetApi)
  if (response.data.data.forests) {
    yield put(saveForestData(response.data.data.forests))
  }
}

function* getTreesSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  const { forestId, startedAt, endedAt } = action.payload
  const response: AxiosResponse<any> = yield call(
    treeList,
    forestId,
    startedAt,
    endedAt,
  )
  if (response.data.data.trees) {
    yield put(saveTreesData(response.data.data.trees))
  }
}

function* getTreeDetailSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  const treeId = action.payload
  const response: AxiosResponse<any> = yield call(treeDetail, treeId)
  if (response.data.data) {
    // const detailData = response.data.data
    // const names: any = detailData.branches.map(
    //   (branch: any) => branch.branchName,
    // )
    // const totalBuds: any = detailData.branches.map(
    //   (branch: any) => branch.totalBudCount,
    // )
    // const completeBuds: any = detailData.branches.map(
    //   (branch: any) => branch.completedBudCount,
    // )
    yield put(saveTreeDetailData(response.data.data))
  }
}

export function* watchForestData() {
  yield takeLatest(getForestData.type, getForestSaga)
  yield takeLatest(getTreesData.type, getTreesSaga)
  yield takeLatest(getTreeDetailData.type, getTreeDetailSaga)
}