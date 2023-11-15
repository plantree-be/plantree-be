import {
  call,
  put,
  takeEvery,
  CallEffect,
  PutEffect,
  SelectEffect,
  select,
  takeLatest,
} from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { PayloadAction } from '@reduxjs/toolkit'
import { FetchUserDataResponse } from '@/types/UserType'
import {
  addBranches,
  addBuds,
  addSeeds,
  finishedBuds,
  finishRejectBuds,
  getBranchData,
  moveBuds,
  removeBuds,
  removeSeeds,
  saveBranches,
  saveBuds,
  saveSeeds,
  setLoading,
} from '@/stores/features/branchSlice.ts'
import {
  branchCreate,
  budComplete,
  budCompleteCancel,
  budCreate,
  budDayUpdate,
  budDelete,
  getSchedule,
  seedCreate,
} from '@/apis'

import { getTreeId } from '@/stores/selectors'

function* getBranchDataSaga(): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  try {
    yield put(setLoading(true))
    const treeId: any = yield select(getTreeId)
    const response: any = yield call(getSchedule, treeId)
    const { branches } = response.data.data
    const { buds } = response.data.data
    const updatedSeeds = branches.reduce((accumulator: any, branch: any) => {
      // 현재 branch의 seeds에 branchId와 branchColor 추가
      const seedsWithBranchInfo = branch.seeds.map((seed: any) => ({
        ...seed,
        branchId: branch.branchId,
        branchColor: branch.branchColor,
        dayOfWeek: '',
      }))
      // 누적된 배열에 현재 seeds 배열을 추가
      return accumulator.concat(seedsWithBranchInfo)
    }, []) // 초기 누적값은 빈 배열

    const updateBuds = buds.map((bud: any) => {
      if (bud.complete) {
        return {
          ...bud,
          dayOfWeek: `${bud.dayOfWeek}_FINISH`,
        }
      }
      return bud
    })
    yield put(saveBranches(branches))
    yield put(saveSeeds(updatedSeeds))
    yield put(saveBuds(updateBuds))
    yield put(setLoading(false))
  } catch (error) {
    /* empty */
    yield put(setLoading(false))
  }
}

function* addBudsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  try {
    yield put(setLoading(true))
    const treeId: any = yield select(getTreeId)
    const { branchId, budName, dayOfWeek } = action.payload.createdItem
    const data = {
      name: budName,
      dayOfWeek,
    }
    if (data.dayOfWeek) {
      yield call(budCreate, treeId, branchId, data)
      yield put(getBranchData())
    } else {
      console.log('아니 왜 null이 감지됨???')
    }
    yield put(setLoading(false))
  } catch (error) {
    /* empty */
  }
}

function* addSeedsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  yield put(setLoading(true))
  const { branchId } = action.payload.createdItem
  const treeId: any = yield select(getTreeId)
  const data = {
    name: action.payload.createdItem.seedName,
  }
  const response: AxiosResponse<any> = yield call(
    seedCreate,
    treeId,
    branchId,
    data,
  )
  if (response.data) {
    yield put(getBranchData())
  }
  yield put(setLoading(false))
}

function* addBranchesSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  yield put(setLoading(true))
  const treeId: any = yield select(getTreeId)
  const data = {
    name: action.payload.createdItem.branchName,
    branchColor: action.payload.createdItem.color,
  }
  const response: AxiosResponse<any> = yield call(branchCreate, treeId, data)
  if (response.data) {
    yield put(getBranchData())
  }
  yield put(setLoading(false))
}

function* removeBudsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  yield put(setLoading(true))
  const treeId: any = yield select(getTreeId)
  const { branchId } = action.payload.createdItem
  const { budId } = action.payload.createdItem
  yield call(budDelete, treeId, branchId, budId)
  yield put(setLoading(false))
}

function* removeSeedsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  yield put(setLoading(true))
  const treeId: any = yield select(getTreeId)
  const { branchId } = action.payload.createdItem
  const { budId } = action.payload.createdItem
  yield call(seedCreate, treeId, branchId, budId)
  yield put(setLoading(false))
}

function* moveBudsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  try {
    yield put(setLoading(true))
    const treeId: any = yield select(getTreeId)
    const { branchId } = action.payload.createdItem
    const { budId } = action.payload.createdItem
    const { dayOfWeek } = action.payload.createdItem
    const data = {
      dayOfWeek,
    }
    if (data.dayOfWeek) {
      yield call(budDayUpdate, treeId, branchId, budId, data)
    } else {
      console.log('아니 왜 null이 감지됨???')
    }
    yield put(setLoading(false))
  } catch (error) {
    /* empty */
  }
}

function* finishBudsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  try {
    yield put(setLoading(true))
    const treeId: any = yield select(getTreeId)
    const { branchId } = action.payload.createdItem
    const { budId } = action.payload.createdItem
    const { dayOfWeek } = action.payload.createdItem
    const reDayofWeek = dayOfWeek.replace('_FINISH', '')
    const data = {
      dayOfWeek: reDayofWeek,
    }
    if (data.dayOfWeek) {
      yield call(budComplete, treeId, branchId, budId, data)
    } else {
      console.log('아니 왜 null이 감지됨???')
    }
    yield put(setLoading(false))
  } catch (error) {
    /* empty */
  }
}

function* finishRejectBudsSaga(
  action: PayloadAction<any>,
): Generator<
  CallEffect | PutEffect | SelectEffect,
  void,
  AxiosResponse<FetchUserDataResponse>
> {
  try {
    yield put(setLoading(true))
    const treeId: any = yield select(getTreeId)
    const { branchId } = action.payload.createdItem
    const { budId } = action.payload.createdItem
    const { dayOfWeek } = action.payload.createdItem
    const data = {
      dayOfWeek,
    }
    if (data.dayOfWeek) {
      yield call(budCompleteCancel, treeId, branchId, budId, data)
    } else {
      console.log('아니 왜 null이 감지됨???')
    }
    yield put(setLoading(false))
  } catch (error) {
    /* empty */
  }
}

export function* watchBranchData() {
  yield takeLatest(getBranchData.type, getBranchDataSaga)
  yield takeEvery(addBuds.type, addBudsSaga)
  yield takeEvery(addSeeds.type, addSeedsSaga)
  yield takeEvery(addBranches.type, addBranchesSaga)
  yield takeEvery(removeBuds.type, removeBudsSaga)
  yield takeEvery(removeSeeds.type, removeSeedsSaga)
  yield takeEvery(moveBuds.type, moveBudsSaga)
  yield takeEvery(finishedBuds.type, finishBudsSaga)
  yield takeEvery(finishRejectBuds.type, finishRejectBudsSaga)
}