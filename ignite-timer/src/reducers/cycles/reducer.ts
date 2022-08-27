import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

type Action = {
  type:
    | 'INTERRUPT_CURRENT_CYCLE'
    | 'ADD_NEW_CYCLE'
    | 'MARK_CURRENT_CYCLE_AS_FINISHED'
  payload?: {
    newCycle?: Cycle
    activeCycleId?: string | null
  }
}

export function cyclesReducer(state: CyclesState, action: Action): CyclesState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return produce(state, (draft) => {
        if (action.payload?.newCycle) {
          draft.cycles.push(action.payload?.newCycle)
          draft.activeCycleId = action.payload?.newCycle?.id
        }
      })
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default: {
      return state
    }
  }
}
